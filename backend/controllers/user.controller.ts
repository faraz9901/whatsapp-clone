import { NextFunction, Request, Response } from "express";
import { mailService } from "../utils/mail.transport";
import env from '../utils/ENV_VARIABLES'
import { MailOptions } from "nodemailer/lib/json-transport";
import { User } from "../models/User.model";
import CustomError from "../utils/CustomError";

export async function createUser(req: Request, res: Response) {
    const email = req.body.email

    const user = new User({
        email
    })

    const mailOptions: MailOptions = {
        from: `"FWhatsApp" <${env.Mail_Address}>`,
        to: email,
        subject: 'Testing',
        text: `Hello ${email} `
    };

    try {
        await user.save()
        // await mailService.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }
    res.send({ message: "User Created" })
}


export async function loginUser(req: Request, res: Response, next: NextFunction) {
    const { email, otp } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        const err = new CustomError("User not found", 500)
        next(err)
    } else {
        res.status(200).json({ message: "User Found" })
    }

}