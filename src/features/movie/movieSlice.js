import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  upComing: null,
  popular: null,
  topRated: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.nowPlaying = action.payload.nowPlaying;
      state.upComing = action.payload.upComing;
      state.popular = action.payload.popular;
      state.topRated = action.payload.topRated;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectNowPlaying = (state) => state.movie.nowPlaying;
export const selectUpComing = (state) => state.movie.upComing;
export const selectPopular = (state) => state.movie.popular;
export const selectTopRated = (state) => state.movie.topRated;

export default movieSlice.reducer;
