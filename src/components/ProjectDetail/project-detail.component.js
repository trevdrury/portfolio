import React from "react";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import * as S from "./project-detail.styles";

const ProjectDetail = ({ copy, project }) => {
  return (
    <div>
      <S.BackgroundContainer>
        <S.SubHeading>Project Background</S.SubHeading>
        <S.Copy>{copy}</S.Copy>
      </S.BackgroundContainer>
      <S.PreviewContainer>
        <S.SubHeading>Static Previews</S.SubHeading>
        <ResponsiveImage
          smallSrc={
            require(`../../assets/images/detail/small/image-${project}-preview-1.jpg`)
              .default
          }
          largeSrc={
            require(`../../assets/images/detail/large/image-${project}-preview-1@2x.jpg`)
              .default
          }
        />
        <ResponsiveImage
          smallSrc={
            require(`../../assets/images/detail/small/image-${project}-preview-2.jpg`)
              .default
          }
          largeSrc={
            require(`../../assets/images/detail/large/image-${project}-preview-2@2x.jpg`)
              .default
          }
        />
      </S.PreviewContainer>
    </div>
  );
};

export default ProjectDetail;
