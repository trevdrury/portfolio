import React, { useState } from "react";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import * as S from "./project-detail.styles";

const ProjectDetail = ({ copy, project }) => {
  const [baseUrl] = useState(`${process.env.PUBLIC_URL}/images/detail`);

  return (
    <div>
      <S.BackgroundContainer>
        <S.SubHeading>Project Background</S.SubHeading>
        <S.Copy>{copy}</S.Copy>
      </S.BackgroundContainer>
      <S.PreviewContainer>
        <S.SubHeading>Static Previews</S.SubHeading>
        <ResponsiveImage
          mobile={`${baseUrl}/mobile/image-${project}-preview-1`}
          tablet={`${baseUrl}/tablet/image-${project}-preview-1`}
          desktop={`${baseUrl}/desktop/image-${project}-preview-1`}
        />
        <ResponsiveImage
          mobile={`${baseUrl}/mobile/image-${project}-preview-2`}
          tablet={`${baseUrl}/tablet/image-${project}-preview-2`}
          desktop={`${baseUrl}/desktop/image-${project}-preview-2`}
        />
      </S.PreviewContainer>
    </div>
  );
};

export default ProjectDetail;
