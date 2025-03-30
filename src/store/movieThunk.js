import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await fetch("/api/api/v1/movies?limit=25");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});
