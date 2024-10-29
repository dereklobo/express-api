var express = require('express');
var router = express.Router();
const { generateImage } = require('../controllers/ImageController');

/* GET images from OpenAI. */
router.post('/images', generateImage);

module.exports = router;
