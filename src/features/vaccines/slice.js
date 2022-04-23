import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: null, data: [] };

export const createVaccine = createAsyncThunk(
	"vaccines/create",
	async (vaccine) => {
		return await http
			.post("/vaccine", { data: vaccine })
			.then((res) => res.data);
	}
);

export const getVaccines = createAsyncThunk(
	"vaccines/get",
	async () => await http("/vaccine").then((res) => res.data.vaccines)
);

export const destroyVaccine = createAsyncThunk(
	"vaccines/destroy",
	async ({ id }) => {
		console.log(id);
		await http.delete(`/vaccine/${id}`).then((res) => res.data);
	}
);

export const updateVaccine = createAsyncThunk(
	"vaccines/update",
	async (id, vaccine) => {
		console.log(current(id, vaccine));
		await http
			.patch(`/vaccine/${Number(id)}`, { vaccine })
			.then((res) => res.data);
	}
);

const vaccinesSlice = createSlice({
	name: "vaccines",
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

			console.log(current(state.data));

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

		builder.addCase(destroyVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(destroyVaccine.fulfilled, (state, action) => {
			state.status = "success";
			state.data = [
				...state.data.filter((item) => item.id !== action.payload.id),
			];
		});

		builder.addCase(createVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(createVaccine.fulfilled, (state, action) => {
			state.status = "success";
		});
		builder.addCase(createVaccine.rejected, (state, action) => {
			state.status = "failed";
		});

		builder.addCase(updateVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(updateVaccine.fulfilled, (state, action) => {
			state.status = "success";
			/**
			const index = state.data.findIndex(
				(vaccine) => vaccine.id === action.payload.id
			);
			state.data[index] = {
				...action.payload.vaccine,
			};
			*/
		});
	},
});

export const { editVaccine, getVaccineById } = vaccinesSlice.actions;
export default vaccinesSlice.reducer;
