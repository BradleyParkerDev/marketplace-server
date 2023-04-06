const express = require("express");
const router = express.Router();


const usersController = require('../controllers/usersController');

//routes
router.get('/message',usersController.message);
router.post("/registration", usersController.registration);
router.post("/login", usersController.login);
module.exports = router;