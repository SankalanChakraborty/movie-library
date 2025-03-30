import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieThunk";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
  searched: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {},
    removeMovies: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id != action.payload);
    },
    searchMovie: (state, action) => {
      state.searched = state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log(state.searched);
    },
  },
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
