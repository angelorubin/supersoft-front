import { Box, Button, Input, Typography } from "@mui/material";
import { Posts } from "components/posts/Posts";

export function Main() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					justifyContent: "center",
					backgroundColor: "common.black",
					minHeight: "80px",
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
					justifyContent: "center",
					width: "100%",
					padding: "0 0.5rem 0 0.5rem",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						minWidth: "90%",
						alignItems: "center",
						padding: "0 39px 44px 39px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							minHeight: "349px",
							background: "#FFFFFF",
							border: "1px solid #999999",
							marginTop: "44px",
							padding: "1.5rem",
							width: "100%",
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
							<Box sx={{ marginTop: "34px" }}>
								<Typography
									sx={{
										fontFamily: "Roboto",
										fontSize: "16px",
										color: "common.black",
										fontWeight: 400,
									}}
								>
									Title
								</Typography>
								<Input
									fullWidth
									placeholder="title"
									sx={{
										backgroundColor: "common.white",
										height: "28px",
										border: "1px solid #777777",
										borderRadius: "4px",
										padding: "0.2rem",
									}}
								/>
							</Box>

							<Box sx={{ marginTop: "19px" }}>
								<Typography
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
								</Typography>
								<Input
									fullWidth
									placeholder="content"
									sx={{
										height: 77,
										backgroundColor: "#FFFFFF",
										border: "1px solid #777777",
										borderRadius: "4px",
									}}
								/>
							</Box>
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

					{/**
					 * Component Post
					 */}
					<Posts />
				</Box>
			</Box>
		</Box>
	);
}
