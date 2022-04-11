import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    createPost: (state) => {},
  },
});

export const { increment } = postsSlice.actions;

export default postsSlice.reducer;