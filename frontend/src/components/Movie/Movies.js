import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "axios";
import Movie from "./Movie";

const URL = "http://localhost:5000/movies";

const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setMovies(data.movies));
  }, []);

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  console.log(movies);

  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie, i) => (
            <li key={i}>
              <Movie movie={movie} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
