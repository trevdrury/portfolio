import React from "react";
import * as S from "./responsive-image.styles";

const ResponsiveImage = ({ mobile, tablet, desktop }) => {
  return (
    <S.Picture>
      <source
        media="(max-width: 768px)"
        srcSet={`${mobile}.jpg 1x, ${mobile}@2x.jpg 2x`}
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${tablet}.jpg 1x, ${tablet}@2x.jpg 2x`}
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${desktop}.jpg 1x, ${desktop}@2x.jpg 2x`}
      />
      <S.Image src={`${desktop}.jpg`} alt="" />
    </S.Picture>
  );
};

export default ResponsiveImage;
