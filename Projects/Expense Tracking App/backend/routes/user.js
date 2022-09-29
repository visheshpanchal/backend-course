const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.post("/user/signup", userController.addUser);

module.exports = router;
