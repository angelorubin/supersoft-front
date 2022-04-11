import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username: "",
};

const signupSlice = createSlice({
	name: "signup",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		register: (state, action) => {
			const { payload } = action;
			state.username = payload;
		},
	},
});

export const selectSignup = (state) => state.signup;

export const { register } = signupSlice.actions;

export default signupSlice.reducer;
