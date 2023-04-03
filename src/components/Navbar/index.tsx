import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Navbar = (): React.ReactNode => {
	return (
		<S.Nav>
			<ul>
				<Link to={"/"}>
					<li>Início</li>
				</Link>
				<Link to={"/tutorial"}>
					<li>Tutorial</li>
				</Link>
				<Link to={"/hexagramas"}>
					<li>Hexagramas</li>
				</Link>
				<Link to={"https://encurtador.com.br/hERVZ"} target="_blank">
					<li>Leitura</li>
				</Link>
			</ul>
		</S.Nav>
	);
};

export default Navbar;
