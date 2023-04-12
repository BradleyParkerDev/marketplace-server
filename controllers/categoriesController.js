const Category = require("../models/Categories");

//Create
async function createCategory(req, res, next){
    console.log(req.body);
	const addNew = new Category(req.body);
	await addNew.save();
	res.json({ success: true });
}

module.exports = {
    createCategory
}