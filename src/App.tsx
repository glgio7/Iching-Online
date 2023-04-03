import React from "react";
import GlobalCSS from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<GlobalCSS />
			<Header />
			<Navbar />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
