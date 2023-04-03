import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 72px;

	position: sticky;
	top: 0;

	z-index: 99;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #080808;

	.logo-container {
		display: flex;
		height: 100%;
		align-items: center;
	}

	.logo__text {
		width: 240px;
		margin-inline: 6px;
	}

	.logo__image {
		width: 42px;
	}

	@media screen and (max-width: 900px) {
		.logo__text {
			width: 180px;
		}

		.logo__image {
			width: 36px;
		}
	}
`;
