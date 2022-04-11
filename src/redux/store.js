import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/post/slice";
import signupReducer from "../features/signup/slice";

export const store = configureStore({
	reducer: {
		// counter: counterReducer,
		post: postReducer,
		signup: signupReducer,
	},
});
