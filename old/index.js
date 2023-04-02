const refreshPage = () => window.location.reload();
const gerador = () => Math.floor((Math.random() * 10) / 6);
const box = document.getElementById("box");
const moedaUm = document.getElementById("mm-1");
const moedaDois = document.getElementById("mm-2");
const moedaTres = document.getElementById("mm-3");
const itemUm = document.getElementById("m-um");
const itemDois = document.getElementById("m-dois");
const itemTres = document.getElementById("m-tres");
const linha = document.getElementById("linha");
const pesquisar = document.getElementById("pesquisar");
const linhas = [];
const hexagrama = [];
const codes = [];
const copiar = document.getElementById("copiar");
const hexagramaDescriptions = [
	//Aproximadamente 40 minutos para criar essa lista
	{
		position: "1",
		code: "Yang,Yang,Yang,Yang,Yang,Yang",
		name: "Chien / O Criativo",
	},
	{
		position: "2",
		code: "Yin,Yin,Yin,Yin,Yin,Yin",
		name: "Kun / O Receptivo",
	},
	{
		position: "3",
		code: "Yang,Yin,Yin,Yin,Yang,Yin",
		name: "Chun / Dificuldade Inicial",
	},
	{
		position: "4",
		code: "Yin,Yang,Yin,Yin,Yin,Yang",
		name: "Meng / A Insensatez Juvenil",
	},
	{
		position: "5",
		code: "Yang,Yang,Yang,Yin,Yang,Yin",
		name: "Hsu / A espera (Nutrição)",
	},
	{
		position: "6",
		code: "Yin,Yang,Yin,Yang,Yang,Yang",
		name: "Sung / Conflito",
	},
	{
		position: "7",
		code: "Yin,Yang,Yin,Yin,Yin,Yin",
		name: "Shih / O Exército",
	},
	{
		position: "8",
		code: "Yin,Yin,Yin,Yin,Yang,Yin",
		name: "Pi / Manter-se Unido (Solidariedade)",
	},
	{
		position: "9",
		code: "Yang,Yang,Yang,Yin,Yang,Yang",
		name: "Hsiao Chu / O Poder de Domar do Pequeno",
	},
	{
		position: "10",
		code: "Yang,Yang,Yin,Yang,Yang,Yang",
		name: "Lu / A Conduta (Trilhar)",
	},
	{
		position: "11",
		code: "Yang,Yang,Yang,Yin,Yin,Yin,",
		name: "Tai / Paz",
	},
	{
		position: "12",
		code: "Yin,Yin,Yin,Yang,Yang,Yang",
		name: "Pi / Estagnação",
	},
	{
		position: "13",
		code: "Yang,Yin,Yang,Yang,Yang,Yang",
		name: "Tung Jên / Comunidade com os Homens",
	},
	{
		position: "14",
		code: "Yang,Yang,Yang,Yang,Yin,Yang",
		name: "Ta Yu / Grandes Posses",
	},
	{
		position: "15",
		code: "Yin,Yin,Yang,Yin,Yin,Yin",
		name: "Chien / Modéstia",
	},
	{
		position: "16",
		code: "Yin,Yin,Yin,Yang,Yin,Yin",
		name: "Yu / Entusiasmo",
	},
	{
		position: "17",
		code: "Yang,Yin,Yin,Yang,Yang,Yin",
		name: "Sui / Seguir",
	},
	{
		position: "18",
		code: "Yin,Yang,Yang,Yin,Yin,Yang",
		name: "Ku / Trabalho Sobre o que se Deteriorou",
	},
	{
		position: "19",
		code: "Yang,Yang,Yin,Yin,Yin,Yin",
		name: "Lin / Aproximação",
	},
	{
		position: "20",
		code: "Yin,Yin,Yin,Yin,Yang,Yang",
		name: "Kuan / Contemplação (a Vista)",
	},
	{
		position: "21",
		code: "Yang,Yin,Yin,Yang,Yin,Yang",
		name: "Shih Ho / Morder",
	},
	{
		position: "22",
		code: "Yang,Yin,Yang,Yin,Yin,Yang",
		name: "Pi / Graciosidade (Beleza)",
	},
	{
		position: "23",
		code: "Yin,Yin,Yin,Yin,Yin,Yang",
		name: "Po / Desintegração",
	},
	{
		position: "24",
		code: "Yang,Yin,Yin,Yin,Yin,Yin",
		name: "Fu / Retorno (O Ponto de Transição)",
	},
	{
		position: "25",
		code: "Yang,Yin,Yin,Yang,Yang,Yang",
		name: "Wu Wang / Inocência (O Inesperado)",
	},
	{
		position: "26",
		code: "Yang,Yang,Yang,Yin,Yin,Yang",
		name: "Ta Chu / O Poder de Domar do Grande",
	},
	{
		position: "27",
		code: "Yang,Yin,Yin,Yin,Yin,Yang",
		name: "I / As Bordas da Boca (Prover Alimento)",
	},
	{
		position: "28",
		code: "Yin,Yang,Yang,Yang,Yang,Yin",
		name: "Ta Kuo / Preponderância do Grande",
	},
	{
		position: "29",
		code: "Yin,Yang,Yin,Yin,Yang,Yin",
		name: "Kan / O Abismal (Água)",
	},
	{
		position: "30",
		code: "Yang,Yin,Yang,Yang,Yin,Yang",
		name: "Li / Aderir (Fogo)",
	},
	{
		position: "31",
		code: "Yin,Yin,Yang,Yang,Yang,Yin",
		name: "Hsien / A Influência (Cortejar)",
	},
	{
		position: "32",
		code: "Yin,Yang,Yang,Yang,Yin,Yin",
		name: "Heng / Duração",
	},
	{
		position: "33",
		code: "Yin,Yin,Yang,Yang,Yang,Yang",
		name: "Tun / A Retirada",
	},
	{
		position: "34",
		code: "Yang,Yang,Yang,Yang,Yin,Yin",
		name: "Ta Chuang / O Poder do Grande",
	},
	{
		position: "35",
		code: "Yin,Yin,Yin,Yang,Yin,Yang",
		name: "Chin / Progresso",
	},
	{
		position: "36",
		code: "Yang,Yin,Yang,Yin,Yin,Yin",
		name: "Ming I / Obscurecimento da Luz",
	},
	{
		position: "37",
		code: "Yang,Yin,Yang,Yin,Yang,Yang",
		name: "Chia Jen / A Família",
	},
	{
		position: "38",
		code: "Yang,Yang,Yin,Yang,Yin,Yang",
		name: "Kuei / Oposição",
	},
	{
		position: "39",
		code: "Yin,Yin,Yang,Yin,Yang,Yin",
		name: "Chien / Obstrução",
	},
	{
		position: "40",
		code: "Yin,Yang,Yin,Yang,Yin,Yin",
		name: "Hsieh / Liberação",
	},
	{
		position: "41",
		code: "Yang,Yang,Yin,Yin,Yin,Yang",
		name: "Sun / Diminuição",
	},
	{
		position: "42",
		code: "Yang,Yin,Yin,Yin,Yang,Yang",
		name: "I / Aumento",
	},
	{
		position: "43",
		code: "Yang,Yang,Yang,Yang,Yang,Yin",
		name: "Kuai / Irromper",
	},
	{
		position: "44",
		code: "Yin,Yang,Yang,Yang,Yang,Yang",
		name: "Kou / Vir ao Encontro",
	},
	{
		position: "45",
		code: "Yin,Yin,Yin,Yang,Yang,Yin",
		name: "Tsui / Reunião",
	},
	{
		position: "46",
		code: "Yin,Yang,Yang,Yin,Yin,Yin",
		name: "Shêng / Ascensão",
	},
	{
		position: "47",
		code: "Yin,Yang,Yin,Yang,Yang,Yin",
		name: "Kun / Opressão (A Exaustão)",
	},
	{
		position: "48",
		code: "Yin,Yang,Yang,Yin,Yang,Yin",
		name: "Ching / O Poço",
	},
	{
		position: "49",
		code: "Yang,Yin,Yang,Yang,Yang,Yin",
		name: "Ko / Revolução",
	},
	{
		position: "50",
		code: "Yin,Yang,Yang,Yang,Yin,Yang",
		name: "Ting / O Caldeirão",
	},
	{
		position: "51",
		code: "Yang,Yin,Yin,Yang,Yin,Yin",
		name: "Chên / O Incitar (Comoção, Trovão)",
	},
	{
		position: "52",
		code: "Yin,Yin,Yang,Yin,Yin,Yang",
		name: "Kên / A Quietude (Montanha)",
	},
	{
		position: "53",
		code: "Yin,Yin,Yang,Yin,Yang,Yang",
		name: "Chien / Desenvolvimento (Progresso Gradual)",
	},
	{
		position: "54",
		code: "Yang,Yang,Yin,Yang,Yin,Yin",
		name: "Kuei Mei / A Jovem que se Casa",
	},
	{
		position: "55",
		code: "Yang,Yin,Yang,Yang,Yin,Yin",
		name: "Fêng / Abundância (Plenitude)",
	},
	{
		position: "56",
		code: "Yin,Yin,Yang,Yang,Yin,Yang",
		name: "Lü / O Viajante",
	},
	{
		position: "57",
		code: "Yin,Yang,Yang,Yin,Yang,Yang",
		name: "Sun / A Suavidade (o Penetrante, Vento)",
	},
	{
		position: "58",
		code: "Yang,Yang,Yin,Yang,Yang,Yang",
		name: "Tui / Alegria (Lago)",
	},
	{
		position: "59",
		code: "Yin,Yang,Yin,Yin,Yang,Yang",
		name: "Huan / Dispersão (Dissolução)",
	},
	{
		position: "60",
		code: "Yang,Yang,Yin,Yin,Yang,Yin",
		name: "Chieh / Limitação",
	},
	{
		position: "61",
		code: "Yang,Yang,Yin,Yin,Yang,Yang",
		name: "Chung Fu / Verdade Interior",
	},
	{
		position: "62",
		code: "Yin,Yin,Yang,Yang,Yin,Yin",
		name: "Hsiao Kuo / A Preponderância do Pequeno",
	},
	{
		position: "63",
		code: "Yang,Yin,Yang,Yin,Yang,Yin",
		name: "Chi Chi / Após a Conclusão",
	},
	{
		position: "64",
		code: "Yin,Yang,Yin,Yang,Yin,Yang",
		name: "Wei Chi / Antes da Conclusão",
	},
];

function adicionaLinha() {
	linhas.push({
		um: itemUm.textContent,
		dois: itemDois.textContent,
		tres: itemTres.textContent,
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (let i = 0; i < linhas.length; i++) {
		if (Object.values(linhas[i]).every((value) => value === "Yang")) {
			// linha.textContent = '—————————————— (9)';
			linha.textContent = `Linha ${codes.length + 1} - Valor 9`;
			codes[i] = "Yang";
		} else if (Object.values(linhas[i]).every((value) => value === "Yin")) {
			linha.textContent = `Linha ${codes.length + 1} - Valor 6`;
			codes[i] = "Yin";
		} else if (
			//poderia usar um array.some() no codigo abaixo?
			linhas[i].um === "Yin" &&
			linhas[i].dois === "Yin"
		) {
			linha.textContent = `Linha ${codes.length + 1} - Valor 7`;
			codes[i] = "Yang";
		} else if (linhas[i].um === "Yin" && linhas[i].tres === "Yin") {
			linha.textContent = `Linha ${codes.length + 1} - Valor 7`;
			codes[i] = "Yang";
		} else if (linhas[i].dois === "Yin" && linhas[i].tres === "Yin") {
			linha.textContent = `Linha ${codes.length + 1} - Valor 7`;
			codes[i] = "Yang";
		} else if (linhas[i].um === "Yang" && linhas[i].dois === "Yang") {
			linha.textContent = `Linha ${codes.length + 1} - Valor 8`;
			codes[i] = "Yin";
		} else if (linhas[i].um === "Yang" && linhas[i].tres === "Yang") {
			linha.textContent = `Linha ${codes.length + 1} - Valor 8`;
			codes[i] = "Yin";
		} else if (linhas[i].dois === "Yang" && linhas[i].tres === "Yang") {
			linha.textContent = `Linha ${codes.length + 1} - Valor 8`;
			codes[i] = "Yin";
		}
		if (linhas.length == 6) {
			linha.textContent = `${linha.textContent} (Confira o resultado)`;
		} else "Algum erro aconteceu";
	}
}

function jogar() {
	if (
		itemUm.textContent == "" &&
		itemDois.textContent == "" &&
		itemTres.textContent == "" &&
		linhas.length < 6
	) {
		let num1 = gerador();
		let num2 = gerador();
		let num3 = gerador();
		box.classList.toggle("active");
		moedaUm.classList.toggle("active");
		moedaDois.classList.toggle("active");
		moedaTres.classList.toggle("active");
		itemUm.textContent = num1 % 2 ? "Yang" : "Yin";
		itemDois.textContent = num2 % 2 ? "Yang" : "Yin";
		itemTres.textContent = num3 % 2 ? "Yang" : "Yin";
		num1 % 2
			? (moedaUm.src = "./img/coroa.png")
			: (moedaUm.src = "./img/cara.png");
		num2 % 2
			? (moedaDois.src = "./img/coroa.png")
			: (moedaDois.src = "./img/cara.png");
		num3 % 2
			? (moedaTres.src = "./img/coroa.png")
			: (moedaTres.src = "./img/cara.png");
		adicionaLinha();
		hexagrama.push(linha.textContent);
	}
}

function recolher() {
	box.classList.remove("active");
	moedaUm.classList.remove("active");
	moedaDois.classList.remove("active");
	moedaTres.classList.remove("active");
	itemUm.textContent = "";
	itemDois.textContent = "";
	itemTres.textContent = "";
}

function mostrarResultado() {
	const filtro = codes.toString();
	const filtroPesquisa = hexagramaDescriptions.filter((v) => v.code === filtro);
	if (linhas.length == 6) {
		pesquisar.textContent = `Hexagrama ${filtroPesquisa[0].position} - ${filtroPesquisa[0].name}`;
		copiar.classList.add("active");
	}
}
function copiarTexto() {
	navigator.clipboard.writeText(pesquisar.textContent);
	copiar.textContent = "Copiado!";
}
