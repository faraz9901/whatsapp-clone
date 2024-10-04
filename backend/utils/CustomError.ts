export default class CustomError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode || 500;
    }
}