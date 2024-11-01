import { Request, Response } from "express";

export interface MyRequest extends Request {
    user: any
}

export async function getChat(req: MyRequest, res: Response) {

    res.status(200).json({ message: "Ok" })
}