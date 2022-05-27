import { configureStore } from "@reduxjs/toolkit";
import MovieRankSlice from './slice/MovieRankSlice';
import CarSlice from "./slice/CarSlice";


const store = configureStore({
  reducer: {  
    movieRank:MovieRankSlice,
    car:CarSlice

},
  devTools: true,
});

export default store;
