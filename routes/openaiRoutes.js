const express = require("express"); // we brought in the express library
const { generateImage } = require("../controllers/openaiController"); // can use the content from generateImage from openaiController.js
const router = express.Router();

router.post("/generateimage", generateImage);

module.exports = router;
