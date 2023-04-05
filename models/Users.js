const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const userSchema = new mongoose.Schema({
    id: {type: String, default: uuidv4()},
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dob: Date,
    gender: String,
    joinedDate: { type: Date, default: Date.now }

});

const User = mongoose.model("users",userSchema);

module.exports = User;