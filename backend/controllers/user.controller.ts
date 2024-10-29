import { Request, Response } from "express";
import Joi from "joi";
import jwt from 'jsonwebtoken'

import { mailService } from "../utils/mail.transport";
import env from '../utils/ENV_VARIABLES'
import { MailOptions } from "nodemailer/lib/json-transport";
import { User } from "../models/User.model";
import { CustomError } from "../utils/CustomError";

const schema = Joi.object({
    email: Joi.string().required().email()
});

const generateOtp = () => {
    const numbers = "1234567890"
    let otp = "";
    for (let index = 0; index < 6; index++) {
        otp = otp + numbers[Math.floor(Math.random() * 10)]
    }
    return +otp
}


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

    const token = jwt.sign({ id: user._id }, env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('Token', token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "strict"
    });

    res.status(202).json({ message: "User Logged In" })
}


export async function loginUser(req: Request, res: Response) {
    const { email } = req.body

    const { error, value } = schema.validate({ email });

    if (error) {
        throw new CustomError("Invalid Email", 400)
    }

    const otp = generateOtp()

    await User.findOneAndUpdate({ email }, { otp }, { upsert: true })



    res.status(202).json({
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