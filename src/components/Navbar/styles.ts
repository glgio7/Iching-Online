import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	align-items: center;

	background-color: #000;

	height: 36px;
	width: 100%;

	ul {
		display: flex;
		justify-content: space-around;

		width: 100%;

		font-weight: bold;
	}

	a {
		transition: all ease 250ms;
		color: #fff;
		&:hover {
			opacity: 0.8;
		}
	}
`;
