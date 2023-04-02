import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 72px;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #141414;

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
`;
