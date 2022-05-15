import { configureStore } from "@reduxjs/toolkit";
import listVaccinesReducer from "features/vaccines/ListVaccinesSlice";
import createVaccineReducer from "features/vaccines/CreateVaccineSlice";

export const store = configureStore({
  reducer: {
    listVaccines: listVaccinesReducer,
    createVaccine: createVaccineReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
