import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./slice";

export function Post() {
	const count = useSelector((state) => state.post.value);
	const dispatch = useDispatch();

	return (
		<>
			<Typography>Post Feature Component</Typography>
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
