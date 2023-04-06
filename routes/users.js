const express = require("express");
const router = express.Router();


const usersController = require('../controllers/usersController');

//routes
router.post("/registration", usersController.registration);
router.post("/login", usersController.login);
router.put("/update-user", usersController.updateUser)
router.delete("/delete-user", usersController.deleteUser)
router.get('/message',usersController.message);

module.exports = router;