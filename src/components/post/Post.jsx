import React from "react";
import { Box, Typography } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { Icon } from "components/icon/Icon";
import { BiEdit } from "react-icons/bi";

export const Post = ({ posts }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "349px",
				background: "#FFFFFF",
				border: "1px solid #999999",
				marginTop: "44px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					height: "70px",
					backgroundColor: "common.black",
					padding: (theme) => theme.typography.pxToRem(22),
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography
						sx={{
							fontFamily: "Roboto",
							fontSize: "22px",
							fontWeight: "700",
							lineHeight: "26px",
							color: "common.white",
						}}
					>
						My First Post at CodeLeap Network!
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
						flex: 1,
					}}
				>
					<Box sx={{ display: "flex" }}>
						<Icon
							value={{
								color: "white",
								style: { size: "22px" },
							}}
						>
							<MdDeleteForever />
						</Icon>

						<Icon
							value={{
								color: "white",
								style: { size: "22px" },
							}}
						>
							<BiEdit />
						</Icon>
					</Box>
				</Box>
			</Box>

			<Box sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
				<Box
					sx={{
						display: "flex",
						marginTop: "23px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flex: 1,
						}}
					>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: "18px",
								lineHeight: "21px",
								color: "#777777",
							}}
						>
							@angelorubin
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<Typography
							sx={{
								fontFamily: "'Roboto'",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: "18px",
								lineHeight: "21px",
								color: "#777777",
							}}
						>
							25 minutes ago
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginTop: "17px",
					}}
				>
					<Typography>
						Curabitur suscipit suscipit tellus. Phasellus consectetuer
						vestibulum elit. Pellentesque habitant morbi tristique senectus et
						netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
						quis ligula mattis placerat. Duis vel nibh at velit scelerisque
						suscipit.
					</Typography>
					<Typography>
						Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
						cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
						sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia
						erat.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
