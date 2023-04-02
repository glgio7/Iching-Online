import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Navbar = () => {
	return (
		<S.Nav>
			<ul>
				<Link to={"/"}>
					<li>Início</li>
				</Link>
				<Link to={"/"}>
					<li>Hexagramas</li>
				</Link>
				<Link to={"https://encurtador.com.br/ehnJU"} target="_blank">
					<li>Leitura</li>
				</Link>
				<Link to={"/"}>
					<li>Tutorial</li>
				</Link>
			</ul>
		</S.Nav>
	);
};

export default Navbar;
