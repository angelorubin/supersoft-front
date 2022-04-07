import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Signup } from "./pages/signup/Signup";
import { Main } from "./pages/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "themes/default";
import { CssBaseline } from "@mui/material";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Signup />} />
					<Route path="/main" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
