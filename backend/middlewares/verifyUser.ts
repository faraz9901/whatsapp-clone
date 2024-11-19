import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'

import env from "../utils/ENV_VARIABLES";
import { User } from "../models/User.model";
import { CustomError } from "../utils/CustomError";

export const verifyUser = async (req: any, res: Response, next: NextFunction) => {

    const token = req?.cookies["fChatToken"]

    if (!token) {
        throw new CustomError("Token not provided! Please Sign In", 401)
    }

    let data: any;
    try {
        data = jwt.verify(token, env.JWT_SECRET)
    } catch (error) {
        throw new CustomError("Token not provided! Please Sign In ", 401)
    }

    if (!data) {
        throw new CustomError("Token not provided! Please Sign In ", 401)
    }

    const user = await User.findOne({ _id: data.id })

    if (!user) {
        throw new CustomError("User not found ", 404)
    }

    req.user = user
    next()
}