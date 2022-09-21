const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/", controller.getData);

router.get("/:id", controller.getData);
router.post("/", controller.postData);

router.put("/:id", controller.putData);
router.delete("/:id", controller.deletePost);
module.exports = router;
