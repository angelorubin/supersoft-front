import { ButtonUnstyled as MuiButton } from "@mui/base";
import { styled } from "@mui/system";

export const Button = styled(MuiButton)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "111px",
	height: "33px",
	fontWeight: 700,
	backgroundColor: theme.palette.common.black,
	color: theme.palette.common.white,
	border: "none",
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		fontWeight: 700,
	},
}));

export const DisabledButton = styled(MuiButton)(({ theme }) => ({
	width: "111px",
	height: "33px",
	backgroundColor: theme.palette.grey[100],
	border: "none",
	color: theme.palette.grey[300],
}));
