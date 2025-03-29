import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/movieThunk";
import Header from "./Components/Header";
import Moviecard from "./Components/Moviecard";

function App() {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies Data:", movies); // Log movies data
  }, [movies]);

  return (
    <>
      <Header />
      <div className="movies-wrapper">
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
