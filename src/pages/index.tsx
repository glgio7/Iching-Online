import React from "react";
import Button from "../components/Button";
import * as S from "../styles";

const Home = () => {
	return (
		<S.Home>
			<S.Container>
				<div className="background-image"></div>
				<h3>Tire suas moedas</h3>

				<div className="interact-container">
					<Button>Jogar</Button>
					<Button>Recolher</Button>
				</div>
			</S.Container>
			<S.Container>
				<div className="background-image"></div>
				<h3>Resultado</h3>

				<div className="interact-container">
					<Button>Mostrar resultado</Button>
					<Button>Recomeçar</Button>
				</div>
			</S.Container>
		</S.Home>
	);
};

export default Home;
