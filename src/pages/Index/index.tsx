import React, { useState } from "react";
import Button from "../../components/Button";
import * as S from "../../styles";
import { ITokens } from "./types";

const tokenGenerator = () => Math.floor((Math.random() * 10) / 6);

// Yin = cara == par
// Yang = coroa === impar

const Home = () => {
	const [lines, setLines] = useState<ITokens[]>([]);

	const [tokens, setTokens] = useState<ITokens>({
		1: {
			image: "/img/cara.png",
			name: "Yin",
		},
		2: {
			image: "/img/cara.png",
			name: "Yin",
		},
		3: {
			image: "/img/cara.png",
			name: "Yin",
		},
	});

	const getTokens = () => {
		const token1 = tokenGenerator() % 2 === 0 ? "Yang" : "Yin";
		const token2 = tokenGenerator() % 2 === 0 ? "Yang" : "Yin";
		const token3 = tokenGenerator() % 2 === 0 ? "Yang" : "Yin";

		if (!hasTokens)
			setTokens({
				1: {
					image: token1 === "Yin" ? "/img/cara.png" : "/img/coroa.png",
					name: token1,
				},
				2: {
					image: token2 === "Yin" ? "/img/cara.png" : "/img/coroa.png",
					name: token2,
				},
				3: {
					image: token3 === "Yin" ? "/img/cara.png" : "/img/coroa.png",
					name: token3,
				},
			});
	};

	const [hasTokens, setHasTokens] = useState<boolean>(false);

	return (
		<S.Home>
			<S.Container>
				<div className="background-image"></div>
				<h3>Tire suas moedas</h3>
				<S.MainContainer active={hasTokens}>
					{Object.values(tokens).map((item, index) => (
						<li key={index}>
							<img src={item.image} className={"coin"} />
							<span>{item.name}</span>
						</li>
					))}
					<h4>Linhas</h4>
				</S.MainContainer>

				<div className="interact-container">
					<Button
						className="token-btn"
						onClick={() => {
							setHasTokens(!hasTokens);
							getTokens();
						}}
					>
						{hasTokens ? "Recolher" : "Jogar"}
					</Button>
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
				<ul className="main-container"></ul>

				<div className="interact-container">
					<Button>Mostrar resultado</Button>
					<Button>Recomeçar</Button>
				</div>
			</S.Container>
		</S.Home>
	);
};

export default Home;

{
	/* <div class="text-box">
        <ul class="roll" id="box">
          <li id="roll-item"><img src="./img/cara.png" class="moedas" id="mm-1" /><span id="m-um"></span></li>
          <li id="roll-item"><img src="./img/cara.png" class="moedas" id="mm-2" /><span id="m-dois"></span></li>
          <li id="roll-item"><img src="./img/cara.png" class="moedas" id="mm-3" /><span id="m-tres"></span></li>
        </ul>
        <h4 id="linha"></h4> */
}
