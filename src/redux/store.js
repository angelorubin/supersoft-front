import { configureStore } from "@reduxjs/toolkit";
import vaccineReducer from "../features/vaccine/vaccineSlice";

export const store = configureStore({
  reducer: {
    vaccine: vaccineReducer,
  },
});
