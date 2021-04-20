import React, { useState } from "react";
import Button from "../Button/button.component";
import * as S from "./hero-section.styles";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";

const HeroSection = ({ scrollHandler }) => {
  const [baseUrl] = useState(`${process.env.PUBLIC_URL}/assets/mockup`);

  const handleClick = () => {
    scrollHandler();
  };

  return (
    <S.HeroSection>
      <ResponsiveImage
        mobile={`${baseUrl}/mobile/mockup`}
        tablet={`${baseUrl}/tablet/mockup`}
        desktop={`${baseUrl}/desktop/mockup`}
      />
      <S.Content>
        <S.Heading>
          Hi, I'm Trevor Drury and I love building beautiful websites
        </S.Heading>
        <Button type="primary" width="200px" onClick={handleClick}>
          ABOUT ME
        </Button>
      </S.Content>
    </S.HeroSection>
  );
};

export default HeroSection;
