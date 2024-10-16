import { Request, Response } from "express";
import { mailService } from "../utils/mail.transport";
import env from '../utils/ENV_VARIABLES'
import { MailOptions } from "nodemailer/lib/json-transport";
import { User } from "../models/User.model";
import Joi from "joi";
import { CustomError } from "../utils/CustomError";

const schema = Joi.object({
    email: Joi.string().required().email()
});


export async function validateOtp(req: Request, res: Response) {
    const { email, otp } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        throw new CustomError("User not found", 404)
    }

    if (user.otp !== otp) {
        throw new CustomError("Wrong OTP", 400)
    }

    await User.findOneAndUpdate({ email }, { otp: null })

    res.json({ message: "User Logged In" })
}


export async function loginUser(req: Request, res: Response) {
    const { email } = req.body

    const { error, value } = schema.validate({ email });

    if (error) {
        throw new CustomError("Invalid Email", 400)
    }

    const otp = Math.round(Math.random() * 1000000)

    await User.findOneAndUpdate({ email }, { otp }, { upsert: true })

    res.json({
        success: true,
        message: "OTP is send to your email address"
    })

    const mailOptions: MailOptions = {
        from: `"FChat" <${env.Mail_Address}>`,
        to: email,
        subject: 'Sign in to your account',
        text: `
    Hello ${email}

    Your otp is ${otp}
     `
    };

    // await mailService.sendMail(mailOptions)

}