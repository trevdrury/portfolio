import React from "react";
import Button from "../Button/button.component";
import profileImg from "../../assets/image-homepage-profile@2x.jpg";
import * as S from "./about-section.styles";

const AboutSection = () => {
  return (
    <S.AboutSection>
      <S.Image src={profileImg} alt="temp" />
      <S.Content>
        <S.Heading>About Me</S.Heading>
        <S.Copy>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Imperial, CA, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </S.Copy>
        <Button type="secondary" width="202px">
          GO TO PORTFOLIO
        </Button>
      </S.Content>
    </S.AboutSection>
  );
};

export default AboutSection;
