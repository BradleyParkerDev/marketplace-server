const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const listingSchema = new mongoose.Schema({
    listingId: {type: String, default: uuidv4()},
    title: String,
    description: String,
    categories: [String],
    photos:[],
    email: String,
    phoneNumber: Number,
    dateCreated: { type: Date, default: Date.now },
    dateModified: Date

});

const Listing = mongoose.model("listings",listingSchema);

module.exports = Listing;