import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import KakaoSlice from "./slice/KakaoSlice";

const logger = createLogger();
const store = configureStore({
  reducer: {
      kakao:KakaoSlice
  },
  middleware: [...getDefaultMiddleware({serialzableCheck:false})],
  devTools: true,
});

export default store;
