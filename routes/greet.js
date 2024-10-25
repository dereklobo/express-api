var express = require('express');
var router = express.Router();

//  Define the route for the GET /greet endpoint
router.get("/", (req, res) => {
    const name = req.query.name || "World";
      res.json({ message: `Hello, ${name}!` });
    });

module.exports = router;