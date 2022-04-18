import { configureStore } from "@reduxjs/toolkit";
import vaccineReducer from "../features/vaccine/vaccineSlice";
import vaccinesReducer from "../features/vaccines/vaccinesSlice";

export const store = configureStore({
	reducer: {
		vaccine: vaccineReducer,
		vaccines: vaccinesReducer,
	},
});
