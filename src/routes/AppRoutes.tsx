import React from "react";
import { Routes, Route } from "react-router-dom";
import Tutorial from "../pages/Tutorial";
import Home from "../pages/Index";
import Hexagramas from "../pages/Hexagramas";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tutorial" element={<Tutorial />} />
			<Route path="/hexagramas" element={<Hexagramas />} />
		</Routes>
	);
};
export default AppRoutes;
