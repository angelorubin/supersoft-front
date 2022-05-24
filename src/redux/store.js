import { configureStore } from "@reduxjs/toolkit";
import vaccineReducer from "features/vaccine/vaccineSlice";
import counterReducer from "features/counter/counterSlice";

export const store = configureStore({
	reducer: {
		vaccine: vaccineReducer,
		counter: counterReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});
