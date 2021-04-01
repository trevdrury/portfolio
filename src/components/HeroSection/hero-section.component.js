import React from "react";
import Button from "../Button/button.component";
import heroImg from "../../assets/image-homepage-hero@2x.jpg";
import * as S from "./hero-section.styles";

const HeroSection = () => {
  return (
    <S.HeroSection>
      <S.Image src={heroImg} alt="temp" />
      <S.Content>
        <S.Heading>
          Hi, I'm Trevor Drury and I love building beautiful websites
        </S.Heading>
        <Button type="primary" width="200px">
          ABOUT ME
        </Button>
      </S.Content>
    </S.HeroSection>
  );
};

export default HeroSection;
