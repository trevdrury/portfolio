import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import * as S from "./footer.styles";

const Footer = () => {
  return (
    <S.Footer>
      <Link to="/">
        <Logo />
      </Link>

      <S.List>
        <S.ListItem>
          <S.Link to="/">HOME</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/portfolio">PORTFOLIO</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/contact">CONTACT ME</S.Link>
        </S.ListItem>
      </S.List>

      <S.SocialWrapper>
        <S.SocialLink
          href="https://www.github.com/trevdrury"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </S.SocialLink>

        <S.SocialLink
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </S.SocialLink>

        <S.SocialLink
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </S.SocialLink>
      </S.SocialWrapper>
    </S.Footer>
  );
};

export default Footer;
