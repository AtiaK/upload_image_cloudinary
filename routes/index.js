var express = require('express');
var router = express.Router();
const upload = require("../config/multerConfig")
const imageController = require("../controllers/ImageController")


router
  .post("/postImage", upload.single('image'), imageController.uploadImage)

module.exports = router;
