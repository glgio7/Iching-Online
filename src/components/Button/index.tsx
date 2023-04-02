import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./types";

const Button = ({ children, className }: ButtonProps) => {
	return (
		<S.ButtonContainer className={className}>{children}</S.ButtonContainer>
	);
};

export default Button;
