const mongoose = require("mongoose");
const User = require("Users")
const { v4: uuidv4 } = require("uuid");


const chatSchema = new mongoose.Schema({
    chatId: {type: String, default: uuidv4()},
    sender: String,
    participants: [String],
    messages:[],
    chatStartDate: { type: Date, default: Date.now }

});

const Chat = mongoose.model("chats",chatSchema);

module.exports = Chat;