import { useState } from "react";
import { Box, Button, Input, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useToggle } from "hooks/useToggle";
import * as S from "components/button/Button";

export function Signup() {
	const [enterStatus, setEnterStatus] = useToggle();
	const [username, setUsername] = useState("");

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					minWidth: "500px",
					height: "220px",
					left: "710px",
					top: "420px",
					background: "#FFFFFF",
					border: "1px solid #CCCCCC",
					boxSizing: "border-box",
				}}
			>
				<Box sx={{ display: "flex" }}>
					<Typography
						sx={{
							fontFamily: "Roboto",
							fontSize: "22px",
							fontWeight: "700",
							lineHeight: "26px",
							letterSpacing: "0em",
							textAlign: "left",
						}}
					>
						Welcome to CodeLeap network!
					</Typography>
				</Box>

				<Box
					sx={{
						marginTop: "30px",
						fontFamily: "Roboto",
						fontSize: "16px",
						fontWeight: 400,
						lineHeight: "19px",
						textAlign: "left",
					}}
				>
					<Typography>Please enter your username</Typography>
					<TextField
						onChange={handleChange}
						name="username"
						placeholder="username"
						value={username}
						sx={{ marginTop: "13px" }}
						inputProps={{
							sx: {
								width: 444,
								height: 28,
								background: "#FFFFFF",
								border: "1px solid #777777",
								boxSizing: "border-box",
								borderRadius: "4px",
							},
						}}
					/>
				</Box>

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						minWidth: "444px",
						marginTop: "20px",
					}}
				>
					{username.length > 0 ? (
						<S.Button
							to="/main"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textDecoration: "none",
							}}
							component={RouterLink}
						>
							ENTER
						</S.Button>
					) : (
						<S.DisabledButton>ENTER</S.DisabledButton>
					)}
				</Box>
			</Box>
		</Box>
	);
}
