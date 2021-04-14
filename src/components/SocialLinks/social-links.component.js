import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
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
      <S.SocialLink
        href="https://www.github.com/trevdrury"
        target="_blank"
        rel="noreferrer"
        dark={dark}
      >
        <TwitterIcon />
      </S.SocialLink>
      <S.SocialLink
        href="https://www.github.com/trevdrury"
        target="_blank"
        rel="noreferrer"
        dark={dark}
      >
        <LinkedInIcon />
      </S.SocialLink>
    </S.SocialWrapper>
  );
};

export default SocialLinks;
