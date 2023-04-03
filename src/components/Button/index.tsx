import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./types";

const Button = ({ children, className, onClick }: ButtonProps) => {
	return (
		<S.ButtonContainer onClick={onClick} className={className}>
			{children}
		</S.ButtonContainer>
	);
};

export default Button;
