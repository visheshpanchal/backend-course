const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.post("/user/signup", userController.addUser);
router.post("/user/login", userController.loginUser);
module.exports = router;
