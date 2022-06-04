import {
	createAsyncThunk,
	createSlice,
	current,
	original,
	isDraft,
} from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: "idle", data: [] };

export const getVaccines = createAsyncThunk(
	"vaccine/get",
	async () => await http("/vaccine").then((res) => res.data.vaccines)
);

export const createVaccine = createAsyncThunk(
	"vaccine/create",
	async (vaccine) => {
		return await http
			.post("/vaccine", { data: vaccine })
			.then((res) => res.data);
	}
);

export const updateVaccine = createAsyncThunk(
	"vaccine/update",
	async ({ vaccineId, vaccine }) => {
		await http.patch(`/vaccine/${Number(vaccineId)}`, vaccine).then((res) => {
			console.log(res.data);
			return res.data;
		});
	}
);

export const destroyVaccine = createAsyncThunk(
	"vaccine/destroy",
	async ({ id }) => {
		await http.delete(`/vaccine/${id}`).then((res) => res.data);
	}
);

const vaccineSlice = createSlice({
	name: "vaccine",
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
		builder.addCase(getVaccines.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(getVaccines.fulfilled, (state, action) => {
			state.status = "success";
			state.data = action.payload;
		});

		builder.addCase(createVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(createVaccine.fulfilled, (state, action) => {
			state.status = "success";
			state.data = initialState.data;
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
		builder.addCase(updateVaccine.rejected, (state, action) => {
			state.status = "failed";
		});

		builder.addCase(destroyVaccine.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(destroyVaccine.fulfilled, (state, action) => {
			state.status = "success";
			const id = Number(action.payload.id);
			state.data = [...state.data.filter((item) => item.id !== id)];
		});
	},
});

export const { editVaccine, getVaccineById } = vaccineSlice.actions;
export default vaccineSlice.reducer;
