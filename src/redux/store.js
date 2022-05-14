import { configureStore } from "@reduxjs/toolkit";
import vaccinesReducer from "features/vaccine/slice";

export const store = configureStore({
	reducer: {
		vaccines: vaccinesReducer,
	},
});
