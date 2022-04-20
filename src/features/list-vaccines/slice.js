import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = {
	vaccines: { status: null, data: [] },
	vaccine: { status: null, data: [] },
};

export const getVaccines = createAsyncThunk(
	"list-vaccines/getVaccines",
	async () => await http("/vaccine").then((res) => res.data.vaccines)
);

export const getVaccineById = createAsyncThunk(
	"list-vaccines/getVaccineById",
	async (id) => await http(`/vaccine/${id}`).then((res) => res.data.vaccine)
);

const listVaccinesSlice = createSlice({
	name: "list-vaccines",
	initialState,
	reducers: {
		editVaccine: (state, action) => {
			state.vaccine.data[0][action.payload.name] = action.payload.value;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getVaccines.fulfilled, (state, action) => {
			state.vaccines.status = "success";
			state.vaccines.data = action.payload;
		});
		builder.addCase(getVaccineById.pending, (state, action) => {
			state.vaccine.status = "loading";
		});
		builder.addCase(getVaccineById.fulfilled, (state, action) => {
			state.vaccine.status = "success";
			state.vaccine.data = [action.payload];
		});
	},
});

export const { editVaccine } = listVaccinesSlice.actions;
export default listVaccinesSlice.reducer;
