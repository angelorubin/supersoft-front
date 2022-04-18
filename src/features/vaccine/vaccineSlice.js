import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: null };

export const createVaccine = createAsyncThunk(
	"vaccine/createVaccine",
	async (vaccine) => {
		return await http
			.post("/vaccine", { data: vaccine })
			.then((res) => res.data);
	}
);

const vaccineSlice = createSlice({
	name: "vaccine",
	initialState,
	extraReducers: {
		[createVaccine.pending]: (state, action) => {
			state.status = "loading";
		},
		[createVaccine.fulfilled]: (state, action) => {
			state.status = "success";
		},
		[createVaccine.rejected]: (state, action) => {
			state.status = "failed";
		},
	},
});

// export const {} = vaccineSlice.actions;

export default vaccineSlice.reducer;
