const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const listingSchema = new mongoose.Schema({
    listingId: {type: String, default: uuidv4},
    title: String,
    photos:[],
    description: String,
    condition: ["new", "like new", "good", "fair"],
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    subCategories:[String],
    email: String,
    phoneNumber: Number,
    dateCreated: { type: Date, default: Date.now },
    dateModified: Date,

    //For Vehicles
    vehicleType: String,
    make: String,
    model: String,
    year: Date,

    //For Properties
    propertyType: String,
    yearBuilt: Date,
    numberOfBedrooms: Number,
    numberOfBathrooms: Number,
    hasBasment: Boolean,
    hasGarage: Boolean

});

const Listing = mongoose.model("listings",listingSchema);

module.exports = Listing;

/*

{
    "title": "Used Car",
    "description": "it works",
    "condition": "fair",
    "price": 3000,
    "category": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    photos:[],
    "email": "bradley@bradley.com",
    "phoneNumber": "555-5555"
}

*/