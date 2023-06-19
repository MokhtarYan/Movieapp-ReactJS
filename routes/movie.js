const { addMovie } = require("../controllers/movie.controller");

const express = require("express");
const router = express.Router();

router.post("/addMovie", addMovie);
module.exports = router;
