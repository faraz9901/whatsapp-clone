import nodemailer from 'nodemailer'
import env from '../utils/ENV_VARIABLES'

export const mailService = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: env.Mail_Address,
        pass: env.Mail_Password,
    },
});