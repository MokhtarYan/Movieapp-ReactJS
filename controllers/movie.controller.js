const Movie = require("../model/Movie");

exports.addMovie = async (req, res) => {
  const {
    title,
    releaseDate,
    genre,
    reviews,
    trailer,
    poster,
    topCast,
    description,
    rating,
  } = req.body;

  const existMovie = await Movie.findOne({ title });
  if (existMovie) {
    res.status(409).json({ msg: "Movie already exists" });
  } else {
    try {
      const newMovie = new Movie({
        title,
        releaseDate,
        genre,
        reviews,
        trailer,
        poster,
        topCast,
        description,
        rating,
      });
      await newMovie.save();

      newMovie
        ? res.status(200).json(newMovie)
        : res
            .status(401)
            .json({ msg: "Chech the movie's informations entered!" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  }
};
