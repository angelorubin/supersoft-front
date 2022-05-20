import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Vaccines } from "./pages/vaccines/Vaccines";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "themes/default";
import { CssBaseline } from "@mui/material";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Vaccines />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
