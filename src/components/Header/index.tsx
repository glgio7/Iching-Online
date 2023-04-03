import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../../assets/logo-image.png";
import textLogo from "../../assets/logo-text.png";
import * as S from "./styles";

const Header = (): React.ReactNode => {
	return (
		<S.HeaderContainer>
			<Link to={"/"}>
				<h1 className="logo-container">
					<img src={textLogo} alt="Iching Logo" className="logo__text" />
					<img src={imageLogo} alt="Iching Logo" className="logo__image" />
				</h1>
			</Link>
		</S.HeaderContainer>
	);
};

export default Header;
