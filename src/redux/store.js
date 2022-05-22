import { configureStore } from "@reduxjs/toolkit";
import listVaccinesReducer from "features/vaccine/ListVaccinesSlice";
import createVaccineReducer from "features/vaccine/CreateVaccineSlice";

export const store = configureStore({
  reducer: {
    listVaccines: listVaccinesReducer,
    createVaccine: createVaccineReducer,
  },
  devTools: true,
});
