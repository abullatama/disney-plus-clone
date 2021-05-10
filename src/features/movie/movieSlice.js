import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  upComing: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.nowPlaying = action.payload.nowPlaying;
      state.upComing = action.payload.upComing;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectNowPlaying = (state) => state.movie.nowPlaying;
export const selectUpComing = (state) => state.movie.upComing;

export default movieSlice.reducer;
