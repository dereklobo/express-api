require('dotenv').config()
var express = require('express');
var router = express.Router();
const axios = require('axios');


const API_KEY = process.env.NASA_API_KEY
const NASA_HOST = process.env.NASA_HOST
const ROVER_PHOTO_PATH = process.env.ROVER_PHOTO_PATH
const URL = NASA_HOST + ROVER_PHOTO_PATH + API_KEY

/* GET home page. */
router.get('/', (request, response) => {
  try {
    axios.get(URL)
          .then(res => response.json(res.data.photos))
          .catch(error => {
              response.render(error);
          });
  }
  catch (err) {
      next(err)
  }
})

module.exports = router;
