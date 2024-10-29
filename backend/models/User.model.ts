import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: Number
    },
});

export const User = mongoose.model('User', userSchema);