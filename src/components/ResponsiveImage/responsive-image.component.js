import React from "react";
import * as S from "./responsive-image.styles";

const ResponsiveImage = ({ mobileSrc, tabletSrc, desktopSrc }) => {
  return (
    <S.Picture>
      <source media="(max-width: 768px)" srcSet={mobileSrc} />
      <source media="(max-width: 1024px)" srcSet={tabletSrc} />
      <source media="(min-width: 1025px)" srcSet={desktopSrc} />
      <S.Image src={desktopSrc} alt="" />
    </S.Picture>
  );
};

export default ResponsiveImage;
