import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./slice";

export function Signup() {
	const count = useSelector((state) => state.post.value);
	const dispatch = useDispatch();

	return (
		<>
			<Typography>Post Feature Component</Typography>
		</>
	);
}
