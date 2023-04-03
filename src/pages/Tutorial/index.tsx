import * as S from "./styles";
import React from "react";

const Tutorial = () => {
	document.title = "Iching by GLGIO7 | Tutorial";

	return (
		<S.Tutorial>
			<S.Container>
				<div className="background-image"></div>
				<h3>Instruções</h3>
				<h3>Como jogar</h3>
				<p>
					Para formar um hexagrama são necessárias 6 jogadas. Para cada
					combinação de moedas tiradas, selecione recolher e jogue novamente.
				</p>
				<h4>1 moeda Yin + 2 moedas Yang</h4>
				<p>Linha yin em repouso, valor 8.</p>
				<h4>2 moeda Yin + 1 moeda Yang</h4>
				<p>Linha yang em repouso, valor 7.</p>
				<h4>3 moedas Yin</h4>
				<p>Linha yin móvel, valor 6.</p>
				<h4>3 moedas Yang</h4>
				<p>Linha yang móvel, valor 9.</p>
				<p>
					Para saber mais, acesse a sessão "Leitura" no menu de navegação e
					conheça alguns livros sobre o oráculo chinês iChing.
				</p>
			</S.Container>
		</S.Tutorial>
	);
};

export default Tutorial;
