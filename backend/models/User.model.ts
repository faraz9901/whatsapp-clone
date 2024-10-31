import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    last_signed_in: {
        type: Date
    }
});

export const User = mongoose.model('User', userSchema);