import { configureStore } from "@reduxjs/toolkit";
import vaccineReducer from "../features/vaccine/slice";
import listVaccinesReducer from "features/list-vaccines/slice";

export const store = configureStore({
	reducer: {
		vaccine: vaccineReducer,
		listVaccines: listVaccinesReducer,
	},
});
