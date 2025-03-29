import React from "react";
import "./Moviecard.css";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movieSlice";

const Moviecard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-card-container">
      <button
        className={`remove-btn `}
        onClick={() => dispatch(movieActions.removeMovies(movie.id))}
      >
        -
      </button>
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
