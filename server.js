const express = require("express");
const connectDB = require("./config/connectDB");
const config = require("config");
const user = require("./routes/user");
const movie = require("./routes/movie");
const port = config.get("PORT");
const app = express();
app.use(express.json());
app.use("/user", user);
app.use("/movie", movie);
connectDB();

const PORT = port || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on ${PORT}`)
);
