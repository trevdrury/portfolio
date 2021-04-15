import React from "react";
import * as S from "./responsive-image.styles";

const ResponsiveImage = ({ smallSrc, largeSrc }) => {
  return (
    <S.Picture>
      <source media="(max-width: 768px)" srcSet={smallSrc} />
      <source media="(min-width: 769px)" srcSet={largeSrc} />
      <S.Image src={largeSrc} alt="" />
    </S.Picture>
  );
};

export default ResponsiveImage;
