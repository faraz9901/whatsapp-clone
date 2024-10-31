import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Types.ObjectId,
        ref: "Message"
    }]

    // unread_count: {
    //     type: Number
    // }

});

export const Chat = mongoose.model('Chat', chatSchema);