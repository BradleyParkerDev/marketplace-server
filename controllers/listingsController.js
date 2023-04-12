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
    const entryId = req.params.id;
    try {
      await Listing.updateOne({ id: entryId }, req.body);
      res.json({success: true, listing: updates });
  
    }catch(e){
      console.log(e);
    }

}

//Delete
async function deleteListing(req, res, next){
    const entryId = req.params.id;

    try {
        await Listing.deleteOne({id: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }
  
    res.json({
        success: true,
        message: `blog entry id ${entryId} deleted`
    })

}

module.exports = {
    createListing,
    getListing,
    updateListing,
    deleteListing
};