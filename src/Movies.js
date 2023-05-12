import React from "react";

const Movies = ({ movie }) => {
  return (
    <li className="movie" key={movie.id}>
      <img src={movie.image} alt={movie.name} width="200px" height="200px" />
      <p>
        {movie.name} directed by
        {movie.director}
      </p>
    </li>
  );
};

export default Movies;
