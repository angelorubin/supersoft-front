import { configureStore } from "@reduxjs/toolkit";
// import listVaccinesReducer from "features/vaccines/ListVaccinesSlice";
import createVaccineReducer from "features/vaccines/CreateVaccineSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { listVaccinesApi } from "services/listVaccines";

export const store = configureStore({
  reducer: {
    [listVaccinesApi.reducerPath]: listVaccinesApi.reducer,
    createVaccine: createVaccineReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listVaccinesApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
