const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const listingSchema = new mongoose.Schema({
    listingId: {type: String, default: uuidv4},
    listingType: String,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    listingImages:[],
    description: String,
    condition: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    subCategory:[String],
    email: String,
    phoneNumber: String,
    dateCreated: { type: Date, default: Date.now },
    dateModified: Date,

    //For Vehicles
    vehicleType: String,
    make: String,
    model: String,
    year: String,
    color: String,
    milesDriven: String,
    transmission: String,
    minMpg: String,
    maxMpg: String,

    //For Properties
    listingPropertyType: String,
    propertyType: String,
    streetAddress: String,
    city: String,
    state: String,
    zipcode: String,
    yearBuilt: String,
    numberOfBedrooms: Number,
    numberOfBathrooms: Number,
    hasBasment: String,
    hasGarage: String

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