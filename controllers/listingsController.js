const { uuid } = require("uuidv4");
const Listing = require('../models/Listings');

//Create
async function createListing(req, res, next){
    console.log(req.body);
	const addNew = new Listing(req.body);
    console.log(addNew)
	await addNew.save();
	res.json({ success: true });

}

//Read
async function getAllListings(req, res, next){
    try {
        const singleListing = await Listing.find({});
        res.json({listings: singleListing });
      }catch(e){
        console.log(e);
      }

}
async function getListing(req, res, next){
    try {
        const singleListing = await Listing.find({listingId:req.params.listingId});
        res.json({listing: singleListing });
      }catch(e){
        console.log(e);
      }

}

//Update
async function updateListing(req, res, next){
    const entryId = req.params.listingId;
    try {
      await Listing.updateOne({ listingId: entryId }, req.body);
      res.json({success: true, listingUpdates: req.body });
  
    }catch(e){
      console.log(e);
    }

}

//Delete
async function deleteListing(req, res, next){
    const entryId = req.params.listingId;

    try {
        await Listing.deleteOne({listingId: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }
  
    res.json({
        success: true,
        message: `Marketplace listing id ${entryId} deleted`
    })

}

module.exports = {
    createListing,
    getAllListings,
    getListing,
    updateListing,
    deleteListing
};