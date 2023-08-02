const mongoose = require("mongoose");
require("dotenv").config();

const Movie = require("./models/Movies");

//connect to our database
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Movie.create({
    name: "Preimer",
    img_url:
      "https://posters.movieposterdb.com/05_09/2004/0390384/l_54699_0390384_b8bbcab7.jpg",
    director: "Shane Carruth",
    year: 2001,
  });
  console.log("created a new moive");
  mongoose.disconnect();
}
decodeURI();
