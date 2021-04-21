import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import * as S from "./social-links.styles";

const SocialLinks = ({ dark }) => {
  return (
    <S.SocialWrapper>
      <S.SocialLink
        href="https://www.github.com/trevdrury"
        target="_blank"
        rel="noreferrer"
        dark={dark}
      >
        <GithubIcon />
      </S.SocialLink>
    </S.SocialWrapper>
  );
};

export default SocialLinks;
