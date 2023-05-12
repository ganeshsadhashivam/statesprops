import React from "react";
import movies from "./data/Movie";
import Movies from "./Movies";
import Moviecss from "./Moviescss.css";
const fetchMovieData = () => {
  return movies;
};

const MoviesComponent = () => {
  const movieData = fetchMovieData();
  return (
    <div className="movie-container">
      <h2>movies</h2>
      <ul className="movie-list">
        {movieData.map((movie) => {
          return <Movies key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default MoviesComponent;
