import styled from "styled-components";

export const Home = styled.main`
	width: 100%;
	min-height: calc(100vh - 72px);

	padding: 2rem;

	display: flex;
	justify-content: space-between;

	background-image: url("img/container-background.jpg");
	background-size: cover;
`;

export const Container = styled.section`
	width: 45%;
	height: 80vh;

	position: relative;
	z-index: 5;

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
	}
`;
