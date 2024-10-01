import { Request, Response } from "express";
import { mailService } from "../utils/mail.transport";
import env from '../utils/ENV_VARIABLES'
import { MailOptions } from "nodemailer/lib/json-transport";
import { User } from "../models/User.model";

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