import React from "react";
import Header from "./components/Header/index";
import Home from "./pages";
import GlobalCSS from "./styles/global";

function App() {
	return (
		<>
			<GlobalCSS />
			<Header />
			<Home />
		</>
	);
}

export default App;
