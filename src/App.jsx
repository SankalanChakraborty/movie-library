import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/movieThunk";
import Header from "./Components/Header";
import Moviecard from "./Components/Moviecard";

function App() {
  const dispatch = useDispatch();
  const { movies, status, error, searched } = useSelector(
    (store) => store.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies: ", movies);
  }, [movies]);

  useEffect(() => {
    console.log("Movies Data:", movies); // Log movies data
  }, [movies]);

  return (
    <>
      <div className="app">
        {status === "loading" && <i className="fa-solid fa-spinner"></i>}
        <Header />
        {!searched.length && (
          <div className="movies-wrapper">
            {movies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
        {searched.length && (
          <div className="movies-wrapper">
            {searched.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
