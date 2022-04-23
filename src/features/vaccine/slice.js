import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: null, vaccines: [] };

export const createVaccine = createAsyncThunk(
	"vaccine/createVaccine",
	async (vaccine) => {
		return await http
			.post("/vaccine", { data: vaccine })
			.then((res) => res.data);
	}
);

export const destroyVaccine = createAsyncThunk(
	"vaccine/destroyVaccine",
	async (id) => {
		return await http.put(`/vaccine/${id}`).then((res) => res.data);
	}
);

const vaccineSlice = createSlice({
	name: "vaccine",
	initialState,
	extraReducers: {
		[destroyVaccine.pending]: (state, action) => {
			state.status = "loading";
		},
		[destroyVaccine.fulfilled]: (state, action) => {
			state.status = "success";
		},
		[destroyVaccine.rejected]: (state, action) => {
			state.status = "failed";
		},
	},
});

export default vaccineSlice.reducer;
