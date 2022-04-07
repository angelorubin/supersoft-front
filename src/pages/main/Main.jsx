import { useState } from "react";
import { useToggle } from "hooks/useToggle";
import {
	Box,
	Button,
	FormGroup,
	FormLabel,
	TextField,
	Typography,
} from "@mui/material";

export function Main() {
	const [isChanged, setIsChanged] = useToggle();

	return (
		<Box
			sx={{
				height: "100vh",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "common.black",
					height: "80px",
				}}
			>
				<Typography
					sx={{
						fontFamily: "Roboto",
						fontSize: "22px",
						fontWeight: "700",
						lineHeight: "26px",
						color: "common.white",
					}}
				>
					CodeLeap Network
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "723px",
						height: "349px",
						left: "598px",
						top: "124px",
						background: "#FFFFFF",
						border: "1px solid #999999",
						boxSizing: "border-box",
						marginTop: "44px",
						padding: "1.5rem",
					}}
				>
					<Box sx={{ display: "flex" }}>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontSize: "22px",
								fontWeight: 700,
								lineHeight: "26px",
								letterSpacing: "0em",
								textAlign: "left",
							}}
						>
							What's on your mind?
						</Typography>
					</Box>

					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<FormGroup sx={{ marginTop: "34px" }}>
							<FormLabel
								sx={{
									fontFamily: "Roboto",
									fontSize: "16px",
									lineHeight: "19px",
									color: "common.black",
									fontWeight: 400,
								}}
							>
								Title
							</FormLabel>
							<TextField
								placeholder="title"
								size="small"
								sx={{ marginTop: "7px" }}
								inputProps={{
									sx: {
										height: "28px",
										background: "#FFFFFF",
										border: "1px solid #777777",
										boxSizing: "border-box",
										borderRadius: "4px",
									},
								}}
							/>
						</FormGroup>

						<FormGroup sx={{ marginTop: "19px" }}>
							<FormLabel
								sx={{
									fontFamily: "Roboto",
									fontSize: "16px",
									fontWeight: "400",
									lineHeight: "19px",
									color: "common.black",
									fontWeight: 400,
								}}
							>
								Content
							</FormLabel>
							<TextField
								sx={{ marginTop: "7px" }}
								placeholder="content"
								size="small"
								inputProps={{
									sx: {
										height: "74px",
										background: "#FFFFFF",
										border: "1px solid #777777",
										boxSizing: "border-box",
										borderRadius: "4px",
									},
								}}
							/>
						</FormGroup>
					</Box>

					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							width: "100%",
							marginTop: "35px",
						}}
					>
						<Button
							sx={{
								width: "111px",
								height: "33px",
								backgroundColor: "common.black",
							}}
						>
							<Typography
								sx={{
									fontFamily: "Roboto",
									fontSize: "16px",
									fontWeight: 700,
									lineHeight: "19px",
									color: "common.white",
								}}
							>
								CREATE
							</Typography>
						</Button>
					</Box>
				</Box>

				<Box sx={{ display: "flex" }}>2</Box>
			</Box>
		</Box>
	);
}
