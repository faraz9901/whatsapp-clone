import express, { Request, Response } from "express";
import userRoutes from './routes/user.routes'
import { connectToDatabase } from "./utils/database";
import { ErrorHandler } from "./utils/CustomError";
import cors from 'cors';
import env from "./utils/ENV_VARIABLES";

const app = express();
const port = 8000;

app.use(express.json())

app.use(cors({
    origin: env.ALLOWED_ORIGIN, // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers)
}))

app.use('/api/v1/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(ErrorHandler);

app.listen(port, async () => {
    await connectToDatabase()
});