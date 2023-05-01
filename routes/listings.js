const express = require("express");
const router = express.Router();


const listingsController = require('../controllers/listingsController');

//routes
router.post("/create-listing", listingsController.createListing)
router.get("/all-listings/", listingsController.getAllListings)
router.get("/get-listing/:listingId", listingsController.getListing)
router.get("/get-listing-by-user-id/:listingUserId", listingsController.getListingByUserId)
router.get("/get-listings-by-category/:category", listingsController.getListingsByCategory)
router.put("/update-listing/:listingId", listingsController.updateListing)
router.delete("/delete-listing/:listingId", listingsController.deleteListing)

module.exports = router;