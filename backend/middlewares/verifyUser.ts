import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'

import env from "../utils/ENV_VARIABLES";
import { User } from "../models/User.model";
import { CustomError } from "../utils/CustomError";

export const verifyUser = async (req: any, res: Response, next: NextFunction) => {

    const token = req.cookies.Token

    if (!token) {
        throw new CustomError("Token not provided! Please Sign In", 401)
    }

    const data: any = jwt.verify(token, env.JWT_SECRET)

    if (!data) {
        throw new CustomError("Token not provided! Please Sign In ", 401)
    }

    const user = await User.findOne({ _id: data.id })
    req.user = user
    next()
}