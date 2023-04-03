import * as S from "./styles";
import React from "react";
import hexagramsDB from "../../db.json";
import { Link } from "react-router-dom";

const Hexagramas = (): React.ReactNode => {
	document.title = "Iching by GLGIO7 | Hexagramas";

	return (
		<S.Hexagramas>
			<S.Container>
				<div className="background-image"></div>
				<h3>Lista de Hexagramas</h3>
				<ul className="hexagrams-list">
					{hexagramsDB.map((item) => (
						<li key={item.position}>
							<h4>{item.name}</h4>
							<Link
								to={`https://www.google.com/search?q=iching+hexagrama+${item.position}`}
								target={"_blank"}
								className="search-link"
							>
								Pesquisar no google
							</Link>
						</li>
					))}
				</ul>
			</S.Container>
		</S.Hexagramas>
	);
};

export default Hexagramas;
