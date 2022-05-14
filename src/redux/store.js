import { configureStore } from "@reduxjs/toolkit";
import vaccinesReducer from "features/vaccines/slice";

export const store = configureStore({
	reducer: {
		vaccines: vaccinesReducer,
	},
});
