import styled from "styled-components";

export const ButtonContainer = styled.button`
	cursor: pointer;
	width: 45%;
	height: 4rem;

	background-color: rgba(255, 169, 0, 1);
	color: #000;

	border-radius: 6px;

	font-weight: bold;
	line-height: 1rem;

	transition: all ease 250ms;

	&:hover {
		background-color: rgba(210, 125, 0, 1);
	}
`;
