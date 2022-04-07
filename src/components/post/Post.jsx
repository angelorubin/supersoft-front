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
					height: "70px",
					backgroundColor: "common.black",
				}}
			>
				<Box>
					<Typography
						sx={{
							height: "22px",
							width: "356px",
							left: "628px",
							top: "532px",
							color: "common.white",
						}}
					>
						My First Post at CodeLeap Network!
					</Typography>
				</Box>
				<Box>
					<Icon value={{ color: "white" }}>
						<MdDeleteForever />
						<BiEdit />
					</Icon>
				</Box>
			</Box>
		</Box>
	);
};
