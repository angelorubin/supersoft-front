import { configureStore } from "@reduxjs/toolkit";
import vaccineReducer from "features/vaccine/VaccineSlice";

export const store = configureStore({
  reducer: {
    vaccine: vaccineReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
