import styled from "styled-components";

export const Hexagramas = styled.main`
	width: 100%;
	min-height: calc(100vh - 72px);

	padding: 2rem;

	display: flex;
	justify-content: center;

	background-image: url("img/container-background.jpg");
	background-size: cover;

	@media screen and (max-width: 900px) {
		padding: 1rem;

		flex-direction: column;
	}
`;

export const Container = styled.section`
	width: 90%;

	position: relative;
	z-index: 5;

	display: flex;
	flex-direction: column;
	align-items: center;

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
		background-position: center;

		opacity: 0.5;

		z-index: -1;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: bold;
		text-align: center;
		color: rgba(255, 169, 0, 1);

		width: 100%;
		line-height: 3rem;

		border-radius: 12px;

		margin-block: 6px;

		background-color: #101010;
	}

	.hexagrams-list {
		width: 100%;
		min-height: 300px;

		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.hexagrams-list li {
		width: 200px;

		border-radius: 12px;

		position: relative;
		z-index: 5;

		margin-block: 6px;

		background-position: center;
		background-image: url("img/card-cover.jpg");
		background-size: cover;

		aspect-ratio: 9/16;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.hexagrams-list li h4,
	.search-link {
		text-align: center;
		background-color: #080808;

		border-radius: 12px 12px 0 0;

		padding: 0.5rem;

		width: 100%;

		line-height: 1.25rem;
		font-size: 1rem;
	}

	.search-link {
		border-radius: 0 0 12px 12px;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		color: rgba(255, 169, 0, 1);

		transition: all 400ms;

		&hover {
			opacity: 0.75;
		}
	}

	@media screen and (max-width: 900px) {
		width: 100%;

		.hexagrams-list li {
			width: 48%;

			background-size: contain;
		}
	}
	.hexagrams-list li h4,
	.search-link {
		font-size: 0.8rem;
		line-height: 1rem;

		height: 4rem;
	}
`;
