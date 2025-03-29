import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

const moviesStore = configureStore({ reducer: { movies: movieSlice.reducer } });

export default moviesStore;
