import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/CustomError";

export default (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode).json({ message: error.message })
}