import React from "react";
import imageLogo from "../../assets/logo-image.png";
import textLogo from "../../assets/logo-text.png";
import * as S from "./styles";

const Header = () => {
	return (
		<S.HeaderContainer>
			{/* <a href="/"> */}
			<h1 className="logo-container">
				<img src={textLogo} alt="Iching Logo" className="logo__text" />
				<img src={imageLogo} alt="Iching Logo" className="logo__image" />
			</h1>
			{/* </a> */}
		</S.HeaderContainer>
	);
};

export default Header;
