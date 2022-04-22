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

export const destroyVaccine = createAsyncThunk(
  "list-vaccines/destroyVaccine",
  async (id) => await http.delete(`/vaccine/${id}`).then((res) => res.data)
);

const listVaccinesSlice = createSlice({
  name: "list-vaccines",
  initialState,
  reducers: {
    editVaccine: (state, action) => {
      state.vaccine.data[0][action.payload.name] = action.payload.value;
    },
    getVaccineById: (state, action) => {
      const vaccine = state.vaccines.data.filter(
        (vaccine) => Number(vaccine.id) === Number(action.payload.id)
      );
      state.vaccine.data = [...vaccine];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVaccines.fulfilled, (state, action) => {
      state.vaccines.status = "success";
      state.vaccines.data = action.payload;
    });

    builder.addCase(destroyVaccine.pending, (state, action) => {
      state.vaccine.status = "loading";
    });

    builder.addCase(destroyVaccine.fulfilled, (state, action) => {
      state.vaccine.status = "success";
      state.vaccines.data = [];
    });
  },
});

export const { editVaccine, getVaccineById } = listVaccinesSlice.actions;
export default listVaccinesSlice.reducer;
