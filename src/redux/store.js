import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
