import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: "idle", data: [] };

export const getVaccines = createAsyncThunk(
	"vaccines/get",
	async () => await http("/vaccine").then((res) => res.data.vaccines)
);

export const destroyVaccine = createAsyncThunk(
	"vaccines/destroy",
	async ({ id }) => {
		return await http.delete(`/vaccine/${Number(id)}`).then((res) => res.data);
	}
);

export const updateVaccine = createAsyncThunk();

const listVaccinesSlice = createSlice({
	name: "listVaccines",
	initialState,
	reducers: {
		editVaccine: (state, action) => {
			const { id, name, value } = action.payload;

			const index = state.data.findIndex(
				(vaccine) => Number(vaccine.id) === Number(id)
			);

			if (index) {
				state.data[index][name] = value;
			}

			// console.log(current(state.data));

			// state.data.filter((item) => item.id === action.payload.id);

			// console.log(JSON.stringify(index));

			// console.log(current(state.data));

			/**
			state.data[0].filter((item) => item.id === action.payload.id);
			state.data[0][action.payload.name] = action.payload.value;
			*/
		},
		getVaccineById: (state, action) => {
			const vaccine = state.data.filter(
				(vaccine) => Number(vaccine.id) === Number(action.payload.id)
			);
			state.data = [...vaccine];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getVaccines.fulfilled, (state, action) => {
			state.status = "success";
			state.data = action.payload;
		});

		builder.addCase(updateVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(updateVaccine.fulfilled, (state, action) => {
			state.status = "success";

			const index = state.data.findIndex(
				(vaccine) => vaccine.id === action.payload.id
			);
			state.data[index] = {
				...action.payload.vaccine,
			};
		});

		builder.addCase(destroyVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(destroyVaccine.fulfilled, (state, action) => {
			state.status = "success";
			const id = Number(action.payload.id);
			state.data = [
				...state.data.filter((item) => {
					return item.id !== id;
				}),
			];
		});
		builder.addCase(destroyVaccine.rejected, (state, action) => {
			state.status = "failed";
		});
	},
});

export const { editVaccine, getVaccineById } = listVaccinesSlice.actions;
export default listVaccinesSlice.reducer;
