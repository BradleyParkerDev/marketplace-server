const express = require("express");
const router = express.Router();


const listingsController = require('../controllers/listingsController');

//routes
router.post("/create-listing", listingsController.getlisting)
router.get("/get-listing", listingsController.getListing)
router.put("/update-listing", listingsController.updateListing)
router.delete("/delete-listing", listingsController.deleteListing)

module.exports = router;