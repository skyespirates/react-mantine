import { configureStore } from "@reduxjs/toolkit";

import animeReducer from "../slices/animeSlice";
import todoReducer from "../slices/todoSlice";
import gameReducer from "../slices/gameSlice";
import movieReducer from "../slices/movieSlice";

const store = configureStore({
  reducer: {
    anime: animeReducer,
    todo: todoReducer,
    game: gameReducer,
    movie: movieReducer,
  },
});

export default store;
