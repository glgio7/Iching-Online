import React from "react";
import Button from "../components/Button";
import * as S from "../styles";

const Home = () => {
	return (
		<S.Home>
			<S.Container>
				<div className="background-image"></div>
				<h3>Tire suas moedas</h3>
				<div className="main-container"></div>

				<div className="interact-container">
					<Button>Jogar</Button>
					<Button>Recolher</Button>
				</div>
				<div className="text-container">
					<p>
						Mantenha em mente o assunto para o qual deseja obter orientação. A
						primeira jogada revela a linha inferior do hexagrama; a segunda
						jogada indica a segunda linha de baixo para cima e, assim por
						diante, até a sexta e última jogada, que indica a última linha
						superior.
					</p>
					<p>Dica: Tire print ou anote as linhas de valor 6 e 9.</p>
				</div>
			</S.Container>
			<S.Container>
				<div className="background-image"></div>
				<h3>Resultado</h3>
				<div className="main-container"></div>

				<div className="interact-container">
					<Button>Mostrar resultado</Button>
					<Button>Recomeçar</Button>
				</div>
			</S.Container>
		</S.Home>
	);
};

export default Home;
