const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const userSchema = new mongoose.Schema({
    id: {type: String, default: uuidv4},
    userImage: String,
    firstName: String,
    lastName: String,
    email: {type: String, lowercase:true},
    password: String,
    dob: Date,
    gender: String,
    pronouns: String,
    joinedDate: { type: Date, default: Date.now }

});

const User = mongoose.model("users",userSchema);

module.exports = User;