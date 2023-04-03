import React from "react";
import GlobalCSS from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar";
import Home from "./pages/Index";

function App() {
	return (
		<BrowserRouter>
			<GlobalCSS />
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
