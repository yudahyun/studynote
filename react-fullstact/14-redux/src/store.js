import { configureStore  } from '@reduxjs/toolkit';
import {createLogger} from "redux-logger";

import counterSlice from "./slice/CounterSlice";
import departmentSlice from "./slice/DepartmentSlice";
import newsSlice from "./slice/NewsSlice";


const logger = createLogger();

const store = configureStore({
    reducer:{
        counter:counterSlice,
        department:departmentSlice,
        news:newsSlice,
    },
    devTools:true
})

export default store;