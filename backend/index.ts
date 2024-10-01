import express, { Request, Response } from "express";
import userRoutes from './routes/user.routes'
import { connectToDatabase } from "./utils/database";


const app = express();
const port = 8000;

app.use(express.json())

app.use('/api/v1/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, async () => {
    await connectToDatabase()
});