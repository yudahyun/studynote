import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";

import MovieRankSlice from "./slice/MovieRankSlice";
// const logger = createLogger();
const store = configureStore({
  reducer: {
      MovieRank :MovieRankSlice
  },
  middleware: [...getDefaultMiddleware({serialzableCheck:false})],
  devTools: true,
});

export default store;
