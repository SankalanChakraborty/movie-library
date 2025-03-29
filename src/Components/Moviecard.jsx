import React from "react";
import "./Moviecard.css";

const Moviecard = ({ movie }) => {
  return (
    <div className="movie-card-container">
      <img src={movie.medium_cover_image} />
      <span className="movie-name">{movie.title}</span>
      <span className="movie-genre">{movie.genres[0]}</span>
      <span className="movie-rating">
        IMDb:{" "}
        <em
          className={`${
            Math.abs(movie.rating) < 5 ? "low-rating" : "high-rating"
          }`}
        >
          {movie.rating}
        </em>
      </span>
    </div>
  );
};

export default Moviecard;
