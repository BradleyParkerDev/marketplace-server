const express = require("express");
const router = express.Router();


const listingsController = require('../controllers/listingsController');

//routes
router.post("/create-listing", listingsController.createListing)
router.get("/get-listing/:listingId", listingsController.getListing)
router.put("/update-listing/:listingId", listingsController.updateListing)
router.delete("/delete-listing/:listingId", listingsController.deleteListing)

module.exports = router;