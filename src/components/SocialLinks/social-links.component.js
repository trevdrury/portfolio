import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import * as S from "./social-links.styles";

const SocialLinks = () => {
  return (
    <S.SocialWrapper>
      <S.SocialLink
        href="https://www.github.com/trevdrury"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
      </S.SocialLink>
      <S.SocialLink
        href="https://www.github.com/trevdrury"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </S.SocialLink>
      <S.SocialLink
        href="https://www.github.com/trevdrury"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </S.SocialLink>
    </S.SocialWrapper>
  );
};

export default SocialLinks;
