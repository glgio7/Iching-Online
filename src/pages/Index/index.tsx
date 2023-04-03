import React, { useState } from "react";
import * as S from "./styles";
import { ITokens } from "./types";
import hexagramsDB from "../../db.json";
import Button from "../../components/Button";
import tails from "../../assets/tails.png";
import heads from "../../assets/heads.png";
import { Link } from "react-router-dom";

const tokenGenerator = (): number => Math.floor((Math.random() * 10) / 6);

const copyResult = (): void => {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(window.location.href);
		window.alert(
			"Hexagrama copiado! Cole o resultado na busca do Google para saber mais sobre seu hexagrama!"
		);
	}
};

let lineValue: number;

const Home = (): React.ReactNode => {
	document.title = "Iching by GLGIO7 | Home";

	const [hasTokens, setHasTokens] = useState<boolean>(false);

	const [hexagram, setHexagram] = useState<string>("");

	const [lines, setLines] = useState<string[]>([]);

	const result: string =
		hexagramsDB.find((item) => item.code === lines.toString())?.name ?? "";

	const search: string =
		hexagramsDB.find((item) => item.code === lines.toString())?.position ?? "0";

	const [tokens, setTokens] = useState<ITokens>({} as ITokens);

	const getTokens = (): void => {
		const currentLine = [
			tokenGenerator() % 2 === 0 ? "Yang" : "Yin",
			tokenGenerator() % 2 === 0 ? "Yang" : "Yin",
			tokenGenerator() % 2 === 0 ? "Yang" : "Yin",
		];

		if (!hasTokens && lines.length < 6) {
			setTokens({
				1: {
					image: currentLine[0] === "Yin" ? heads : tails,
					name: currentLine[0],
				},
				2: {
					image: currentLine[1] === "Yin" ? heads : tails,
					name: currentLine[1],
				},
				3: {
					image: currentLine[2] === "Yin" ? heads : tails,
					name: currentLine[2],
				},
			});

			const currentLineValue = currentLine.every((item) => item === "Yang")
				? 9
				: currentLine.every((item) => item === "Yin")
				? 6
				: currentLine.filter((item) => item === "Yin").length >= 2
				? 7
				: 8;

			const currentLineName = currentLine.every((item) => item === "Yang")
				? "Yang"
				: currentLine.every((item) => item === "Yin")
				? "Yin"
				: currentLine.filter((item) => item === "Yin").length >= 2
				? "Yang"
				: "Yin";

			setLines([...lines, currentLineName]);
			lineValue = currentLineValue;
		}
	};

	return (
		<S.Home>
			<S.Container>
				<div className="background-image"></div>
				<h3>Tire suas moedas</h3>
				<S.MainContainer active={hasTokens}>
					{Object.values(tokens).map((item, index) => (
						<li key={index}>
							<img
								src={item.image}
								className={hasTokens ? "coin active" : ""}
							/>
							<span>{item.name}</span>
						</li>
					))}
					{lines.length < 6 && (
						<h4>{`Linha ${lines.length} - Valor ${lineValue}`} </h4>
					)}
					{lines.length === 6 && (
						<h4>{`Linha ${lines.length} - Valor ${lineValue} | Confira o resultado`}</h4>
					)}
				</S.MainContainer>

				<div className="interact-container">
					<Button
						className="main-btn"
						onClick={() => {
							if (lines.length < 6) setHasTokens(!hasTokens);
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
				{hexagram !== "" && (
					<div className="text-container">
						<h4> Hexagrama</h4>
						<p>{hexagram}</p>
						<Button className="main-btn" onClick={copyResult}>
							Copiar resultado
						</Button>
						<p>
							<Link
								to={`https://carlafilizzola.blogspot.com/search?q=hexagrama+${search}`}
								target={"_blank"}
							>
								Pesquisa rapida
							</Link>
						</p>
						<p>
							O Iching Online é apenas uma demonstração e "alternativa de bolso"
							ao verdadeiro Iching. O link de pesquisa rápida pode fornecer-lhe
							maiores informações sobre o hexagrama resultante, assim como
							maiores informações sobre o Iching em si.
						</p>
					</div>
				)}

				<div className="interact-container">
					<Button
						onClick={() => {
							if (lines.length === 6) {
								setHexagram(result);
							}
						}}
					>
						Mostrar resultado
					</Button>
					<Button onClick={() => window.location.reload()}>Recomeçar</Button>
				</div>
			</S.Container>
		</S.Home>
	);
};

export default Home;
