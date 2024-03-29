import styled from "styled-components";

export const Home = styled.main`
	width: 100%;
	min-height: calc(100vh - 72px);

	padding: 2rem;

	display: flex;
	justify-content: space-between;

	background-image: url("img/container-background.jpg");
	background-size: cover;

	@media screen and (max-width: 900px) {
		padding: 1rem;

		flex-direction: column;
	}
`;

export const Container = styled.section`
	width: 45%;
	height: 80vh;

	position: relative;
	z-index: 5;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding: 1rem;

	color: #fff;
	background-color: #101010;

	border-radius: 12px;

	.background-image {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		border-radius: 12px;

		background-image: url("img/background.jpg");
		background-size: cover;

		opacity: 0.5;

		z-index: -1;
	}

	h3,
	h4 {
		font-size: 1.25rem;
		font-weight: bold;
		text-align: center;

		width: 100%;
		line-height: 3rem;

		border-radius: 12px;

		background-color: #101010;
	}

	h4 {
		background-color: transparent;
		font-size: 1rem;
		color: rgba(255, 169, 0, 1);
	}

	.interact-container {
		display: flex;
		justify-content: space-between;

		width: 100%;
	}

	.main-btn {
		width: 100%;
	}

	.text-container {
		width: 100%;
	}
	p {
		padding: 6px;
		width: 100%;
		margin-block: 6px;

		border-radius: 6px;

		background-color: rgba(0, 0, 0, 0.75);

		text-align: center;
	}

	.coin.active {
		animation: rotate 500ms linear;
		animation-delay: 0.1s;
	}

	@keyframes rotate {
		to {
			transform: rotateY(1600deg);
		}
	}

	a {
		color: rgba(255, 169, 0, 1);
	}

	@media screen and (max-width: 900px) {
		width: 100%;
		min-height: 50vh;
		height: auto;
		margin-bottom: 2rem;
	}
`;

export const MainContainer = styled.ul<{ active: boolean }>`
	height: 100%;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;

	padding: 6px;
	margin-block: 6px;

	border-radius: 6px;

	background-color: rgba(0, 0, 0, 0.75);

	li,
	h4 {
		width: 20%;
		text-align: center;

		opacity: ${({ active }) => (active ? "1" : "0")};

		transition: all 500ms;
	}
	h4 {
		width: 100%;
	}
`;
