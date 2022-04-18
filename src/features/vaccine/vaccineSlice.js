import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "config/api";

const initialState = { status: null, vaccine: {} };

export const getVaccine = createAsyncThunk(
  "vaccine/getVaccine",
  async (dispatch, getState) => {
    return await http.get("/vaccine").then((res) => res.data);
  }
);

const vaccineSlice = createSlice({
  name: "vaccine",
  initialState,
  reducers: {},
  extraReducers: {
    [getVaccine.pending]: (state, action) => {
      state.status = "loading";
    },
    [getVaccine.fulfilled]: (state, action) => {
      state.status = "success";
      state.vaccine = action.payload;
    },
    [getVaccine.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// export const {} = vaccineSlice.actions;

export default vaccineSlice.reducer;
