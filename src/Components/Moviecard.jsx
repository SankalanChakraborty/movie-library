import React from "react";
import "./Moviecard.css";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movieSlice";

const Moviecard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-card-container" key={movie.id}>
      <div className="action-btns">
        <button
          className={`remove-btn btn`}
          onClick={() => dispatch(movieActions.removeMovie(movie.id))}
        >
          -
        </button>
        <button
          className={`add-btn btn`}
          onClick={() => dispatch(movieActions.addMovie(movie))}
        >
          +
        </button>
      </div>
      <img src={movie.poster} />
      <span className="movie-name">{movie.title}</span>
      <div className="genre">
        {movie.genre.map((genre) => (
          <span key={genre} className="movie-genre">
            {genre}&nbsp;{" "}
          </span>
        ))}
      </div>

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
