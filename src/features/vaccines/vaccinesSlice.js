import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: null, data: [] };

export const getVaccines = createAsyncThunk(
	"vaccines/getVaccines",
	async () => {
		return await http.get("/vaccine").then((res) => res.data.results);
	}
);

const vaccinesSlice = createSlice({
	name: "vaccines",
	initialState,
	extraReducers: {
		[getVaccines.pending]: (state, action) => {
			state.status = "loading";
		},
		[getVaccines.fulfilled]: (state, action) => {
			state.status = "success";
			state.data = action.payload;
		},
		[getVaccines.rejected]: (state, action) => {
			state.status = "failed";
		},
	},
});

export default vaccinesSlice.reducer;
