const express = require("express");
const router = express.Router();


const categoriesController = require('../controllers/categoriesController');
router.post("/create-category", categoriesController.createCategory)
router.get("/get-all-categories", categoriesController.getCategory)

module.exports = router;

/*
{
    "name":"Vehicles", 
    "vehicleType":["automobile","boat", "plane"],
    "make": String,
    "model": String,
    "year": Number,
    "subCategories":[]
}

{
    "name":"Property Rentals",
    "propertyType": ["Apartment", "Condo", "House", "Modular Home", "Townhome"], 
    "subCategories":[]
}

{
    "name":"Apparel", 
    "subCategories":["Shirts", "Pants", "Hats", "Belts", "Shoes", "Dresses", "Shorts"],
    "gender": ["Male", "Female"]
}

{
    "name":"Classifieds", 
    "subCategories":["Garage Sale", "Miscellaneous"]
}

{
    "name":"Electronics", 
    "subCategories":["Home Audio & Video Systems", "Video Games & Consoles", "Cell Phones", "Cell Phone Accessories", "Cables & Adapters", "Cameras", "Storage Devices", "Other"]
}

{
    "name":"Entertainment", 
    "subCategories":["Books", "Movies", "Music"]
}

{
    "name":"Family", 
    "subCategories":["Baby & Kids Items", "Health & Beauty"]
}

{
    "name":"Free Stuff", 
    "subCategories":[]
}

{
    "name":"Garden & Outdoor", 
    "subCategories":["Bird & Wildlife Accessories", "Fencing Supplies", "Garden Decor","Garden Structures","Gardening Supplies", "Outdoor Cooking", "Outdoor Lighting", "Outdoor Power Equipment", "Pools & Spas"]
}

{
    "name":"Hobbies", 
    "subCategories":["Antiques & Collectibles", "Arts & Crafts", "Auto Parts", "Bicycles"]
}

{
    "name":"Home Goods", 
    "subCategories":["Appliances", "Bath Products", "Bedding", "Cleaning Supplies", "Furniture", "Home Decor", "Home Lighting", "Kitchen & Dining Products", "Home Storage"]
}

{
    "name":"Home Improvement Supplies", 
    "subCategories":["Bathroom Vanities", "Bricks & Cinder Blocks", "Gutters", "Home Heating & Cooling", "Kitchen Cabinents", "Mailboxes", "Shower & Shower Parts"]
}

{
    "name":"Home Sales", 
    "subCategories":[]
}

{
    "name":"Musical Instruments", 
    "subCategories":["Audio Equipment", "Brass Instruments", "Drum Sets", "Guitars & Bases", "Music Accessories", "Percussion Instruments", "Pianos & Keyboards", "String Instruments", "Wind Instruments"]
}

{
    "name":"Office Supplies", 
    "subCategories":["Bubble Wrap", "Clipboards", "Desk Organizers", "Whiteboards", "Calculators", "Pens & Pencils"]
}

{
    "name":"Pet Supplies", 
    "subCategories":["Bird Supplies","Cat Supplies","Dog Supplies", "Fish Supplies", "Reptile Supplies", "Pet Kennels", "Pet Grooming Supplies", "Pet Collars, Harnesses, & Leashes", "Pet Crates"]
}

{
    "name":"Sporting Goods", 
    "subCategories":["Exercise & Fitness Equipment","Indoor Games","Outdoor Games", "Outdoor Recreation Equipment", "Sports Equipment"]
}

{
    "name":"Toys & Games", 
    "subCategories":["Action Figures","Building Toys","Dollhouses", "Dolls","Educational Toys","Math Toys", "Model Kits", "Outdoor Toys", "Pretend Play Toys", "Puzzels", "Remote Control Toys", "Robots", "Stuffed Animals", "Toy Vehicles"]
}

*/