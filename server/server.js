const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 4242;
const app = express();
app.use(cors());
app.use(bp.json());
const Movie = require("./models/Movies");

//connect to mongoose database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connected"));

//set up basic endpoint
app.get("/", (request, response) => {
  response.status(200).json({ Welcome: "you have made it!" });
});

//CRUD Read
app.get("/movies", async (request, response) => {
  try {
    const movies = await Movie.find(request, query);
    response.status(200).json(movies);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

//CRUD Create
app.post("/movies", async (request, response) => {
  try {
    const newMovie = await Movie.create(request, body);
    response.status(200).json(newMovie);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

//CRUD DELETE

app.delete("/movies/:id", async (request, response) => {
  console.log(request);
  try {
    const id = request.params.id;
    console.log(id);
    const deletedMovie = await Movie.findByIdAndDelete(id);
    response.status(200).json(deleteMovie);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`summoning a server on PORT  ${PORT}`));
