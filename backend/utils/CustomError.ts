import { NextFunction, Request, Response } from "express";

export class CustomError extends Error {
    readonly statusCode: number;
    constructor(message?: string, statusCode?: number) {
        super(message || "Internal Server Error");
        this.statusCode = statusCode || 500;
    }
}

export const ErrorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.
        status(error.statusCode)
        .json({
            success: false,
            status: error.statusCode,
            message: error.message
        })
}