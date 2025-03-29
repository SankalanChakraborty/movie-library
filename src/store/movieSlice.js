import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieThunk";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: { addMovie: () => {}, removeMovies: () => {} },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "success";
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
