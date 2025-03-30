import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/movieThunk";
import Header from "./Components/Header";
import Moviecard from "./Components/Moviecard";
import Notification from "./Components/Notification";

function App() {
  const [addedToFav, setAddedToFav] = useState(false);
  const dispatch = useDispatch();
  const { movies, status, error, searchedMovie, favourites } = useSelector(
    (store) => store.movies
  );

  console.log(favourites);

  useEffect(() => {
    if (favourites.length > 0) {
      setAddedToFav(true);
      const timeoutId = setTimeout(() => {
        setAddedToFav(false);
      }, 2500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [favourites.length]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies Data:", movies); // Log movies data
  }, [movies]);

  return (
    <>
      <div className="app">
        {addedToFav ? <Notification /> : ""}
        {status === "loading" ? <i className="fa-solid fa-spinner"></i> : ""}
        <Header />
        {!searchedMovie.length ? (
          <div className="movies-wrapper">
            {movies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="movies-wrapper">
            {searchedMovie.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
