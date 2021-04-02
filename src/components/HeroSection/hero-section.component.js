import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Button from "../Button/button.component";
import * as S from "./hero-section.styles";
import mobileHeroImg from "../../assets/mobile-image-homepage-hero@2x.jpg";
import tabletHeroImg from "../../assets/tablet-image-homepage-hero@2x.jpg";
import desktopHeroImg from "../../assets/desktop-image-homepage-hero@2x.jpg";

const HeroSection = () => {
  const [width] = useWindowSize();

  const setImageSrc = () => {
    return width > 1025
      ? desktopHeroImg
      : width > 768
      ? tabletHeroImg
      : mobileHeroImg;
  };

  return (
    <S.HeroSection>
      <S.Image src={setImageSrc()} />
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
