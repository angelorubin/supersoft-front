import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export function theme() {
	return createTheme({
		palette: {
			common: {
				white: "#fff",
				black: "#000",
			},
			primary: {
				main: blue[400],
			},
			secondary: {
				main: green[400],
			},
			grey: {
				50: "#F3F6F9",
				100: "#E7EBF0",
				200: "#E0E3E7",
				300: "#CDD2D7",
				400: "#B2BAC2",
				500: "#A0AAB4",
				600: "#6F7E8C",
				700: "#3E5060",
				800: "#2D3843",
				900: "#1A2027",
				A100: "#f5f5f5",
				A200: "#eeeeee",
				A400: "#bdbdbd",
				A700: "#616161",
			},
		},
	});
}
