const Category = require("../models/Categories");

//Create
async function createCategory(req, res, next){
    console.log(req.body);
	const addNew = new Category(req.body);
	await addNew.save();
	res.json({ success: true });
}

async function getCategory(req, res, next){
    try {
        const allCategories = await Category.find({});
        res.json({categories: allCategories });
      }catch(e){
        console.log(e);
      }
}
module.exports = {
    createCategory,
	getCategory
}