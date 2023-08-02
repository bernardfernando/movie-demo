import React, { useEffect } from "react";
import axios from "axios";
import MovieCard from "./movieCard/MovieCard";
import Form from "./Form/Form";

export default function Main() {
  const [formData, setformData] = useState({
    name: "",
    img_url: "",
    director: "",
    year: "",
  });

  const [movies, setmovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  //READ
  async function getMovies() {
    let API = "http://localhost:4242/movies";
    const result = await axios.get(API);
    console.log(result.data);
    setmovies(result.data);
  }

  //dealing with form data
  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
    setmovies([...movies, res.data]);
  };

  //create
  const handleAddMovie = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:4242/movies", formData);
    setmovies([...movies, res.data]);
  };

  //delete Movies
  const handleDelete = async (id) => {
    console.log("clicked");
    const res = await axios.delete("http://localhost:4242/movies/${id}");
    console.log(res);
    getMovies();
  };

  return (
    <div>
      <Form handleChange={handleChange} handleAddMovie={handleAddMovie} />
      <h3>This is my Main!</h3>
      <MovieCard movies={movies} handleDelete={handleDelete} />
    </div>
  );
}
