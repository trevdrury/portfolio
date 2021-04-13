import React from "react";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import * as S from "./project-detail.styles";

const ProjectDetail = ({ copy, images }) => {
  return (
    <div>
      <S.BackgroundContainer>
        <S.SubHeading>Project Background</S.SubHeading>
        <S.Copy>{copy}</S.Copy>
      </S.BackgroundContainer>
      <S.PreviewContainer>
        <S.SubHeading>Static Previews</S.SubHeading>
        <ResponsiveImage
          mobileSrc={images.previewImageOne.mobile}
          tabletSrc={images.previewImageOne.tablet}
          desktopSrc={images.previewImageOne.desktop}
        />
        <ResponsiveImage
          mobileSrc={images.previewImageTwo.mobile}
          tabletSrc={images.previewImageTwo.tablet}
          desktopSrc={images.previewImageTwo.desktop}
        />
      </S.PreviewContainer>
    </div>
  );
};

export default ProjectDetail;
