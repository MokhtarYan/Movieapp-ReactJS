const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  releaseDate: String,
  rating: Number,
  ratingHistory: [{ type: Object, default: [] }],
  trailer: String,
  reviews: String,
  description: String,
  genre: String,
  poster: String,
  identifier: Number,
  topCast: String,
});

module.exports = mongoose.model("Movie", movieSchema);
