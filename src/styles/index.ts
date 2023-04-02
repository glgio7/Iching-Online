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

	background-color: #303030;

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

	h3 {
		font-size: 1.25rem;
		font-weight: bold;
		text-align: center;

		width: 100%;
		line-height: 3rem;

		border-radius: 12px;

		color: #fff;
		background-color: #101010;
	}

	.interact-container {
		display: flex;
		justify-content: space-between;

		width: 100%;
	}

	@media screen and (max-width: 900px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`;
