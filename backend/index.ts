import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors';

import userRoutes from './routes/user.routes'
import chatRoutes from './routes/chat.routes'
import { connectToDatabase } from "./utils/database";
import { ErrorHandler } from "./utils/CustomError";
import env from "./utils/ENV_VARIABLES";

const app = express();
const port = 8000;

app.use(cookieParser());

app.use(express.json())

app.use(cors({
    origin: env.ALLOWED_ORIGIN, // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers)
}))

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/chat', chatRoutes)

app.use(ErrorHandler);

app.listen(port, async () => {
    await connectToDatabase()
});