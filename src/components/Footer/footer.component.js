import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import useWindowSize from "../hooks/useWindowSize";
import SiteMenu from "../SiteMenu/site-menu.component";
import SocialLinks from "../SocialLinks/social-links.component";
import * as S from "./footer.styles";

const Footer = () => {
  const [width] = useWindowSize();

  return (
    <S.Footer>
      <div className="ui-container">
        <S.FooterContent>
          <S.Link to="/">
            <Logo style={{ fill: "white" }} />
          </S.Link>

          <SiteMenu
            orientation={width < 769 ? "column" : "row"}
            color="white"
          />

          <SocialLinks />
        </S.FooterContent>
      </div>
    </S.Footer>
  );
};

export default Footer;
