import { Request, Response } from "express";
import { Message } from "../models/Message.model";
import { User } from "../models/User.model";
import { CustomError } from "../utils/CustomError";

export interface MyRequest extends Request {
    user: any
}

export async function getChat(req: MyRequest, res: Response) {

    res.status(200).json({ message: "Ok" })
}


export async function sendMessage(req: MyRequest, res: Response) {

    const message = req.body

    const receiver = await User.findById(message.to)

    if (!receiver) throw new CustomError("The user is not on the F-Chat", 400)

    await Message.create(message)

    res.status(201).json({ success: true, message: "Message Sent" })
}