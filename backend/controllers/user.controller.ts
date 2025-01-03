import { Request, Response } from "express";
import Joi from "joi";
import jwt from 'jsonwebtoken'

import { mailService } from "../utils/mail.transport";
import env from '../utils/ENV_VARIABLES'
import { MailOptions } from "nodemailer/lib/json-transport";
import { User } from "../models/User.model";
import { CustomError } from "../utils/CustomError";
import { OTP } from "../models/Otp.model";
import { MyRequest } from "./chat.controller";

const schema = Joi.object({
    email: Joi.string().required().email()
});

const generateOtp = () => {
    const numbers = "1234567890"
    let otp = "";
    for (let index = 0; index < 6; index++) {
        otp = otp + numbers[Math.floor(Math.random() * 10)]
    }
    return otp
}


export async function validateOtp(req: Request, res: Response) {
    const { email, otp } = req.body

    const isValidUser = await OTP.findOne({ email })

    if (!isValidUser) {
        throw new CustomError("User not found", 404)
    }

    if (isValidUser.otp !== otp) {
        throw new CustomError("Wrong OTP", 400)
    }

    const userExists = await User.findOne({ email })

    let user;

    if (userExists) {
        user = await User.findOneAndUpdate({ email }, { last_signed_in: new Date() }, { new: true })
    } else {

        const name = email.split("@")[0]

        const newUser = new User({
            email,
            name,
            last_signed_in: new Date()
        })

        user = await newUser.save()
    }

    await OTP.findOneAndDelete({ email })

    if (!user) {
        throw new CustomError("Cannot create the user", 400)
    }

    const token = jwt.sign({ id: user._id }, env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('fChatToken', token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "strict"
    });

    res.status(202).json({
        success: true,
        message: "User Logged In",
        content: user
    })

}


export async function loginUser(req: Request, res: Response) {
    const { email } = req.body

    const { error } = schema.validate({ email });

    if (error) {
        throw new CustomError("Invalid Email", 400)
    }

    const otp = generateOtp()

    await OTP.findOneAndUpdate({ email }, { otp }, { upsert: true })

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

    Your OTP is ${otp}
     `
    };

    // await mailService.sendMail(mailOptions)

}

export const getCurrentUser = (req: MyRequest, res: Response) => {
    res.status(200).json({
        success: true,
        content: req.user
    })
}


export const logoutUser = (req: Request, res: Response) => {

    res.clearCookie("Token")

    res.status(200).json({
        success: true,
        message: "User Logged out"
    })

}

export const usersList = async (req: MyRequest, res: Response) => {
    const { search_query } = req.query
    const { _id } = req.user

    if (!search_query) return res.end()

    const regex = new RegExp(search_query.toString(), "i")

    const query = {
        $and: [
            { _id: { $ne: _id } },
            {
                $or: [
                    { email: regex },
                    { name: regex }
                ]
            }
        ]
    }

    const users = await User.find(query, { email: 1, name: 1 }).limit(4)

    res.status(200).json({
        success: true,
        content: users
    })

}