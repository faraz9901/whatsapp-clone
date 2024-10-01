import mongoose from "mongoose";
import env from './ENV_VARIABLES'

export async function connectToDatabase() {
    try {
        await mongoose.connect(env.DB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}