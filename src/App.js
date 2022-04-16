import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Vaccine } from "./pages/vaccine";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "themes/default";
import { CssBaseline } from "@mui/material";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Vaccine />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
