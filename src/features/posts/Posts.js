import { Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./slice";

export function Posts() {
  const count = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  return (
    <>
      <Typography>Posts Feature Component</Typography>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        test
      </button>
      {count}
    </>
  );
}
