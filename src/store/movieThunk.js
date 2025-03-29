import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  // const response = await fetch("/api/api/v1/movies?limit=15");
  // const data = await response.json();
  const url =
    "https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7f8f1d1a9amshbb2b62305acfaa7p137143jsn235840de533c",
      "x-rapidapi-host": "movie-database-api1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result.data.movies;
  } catch (error) {
    console.error(error);
  }
});
