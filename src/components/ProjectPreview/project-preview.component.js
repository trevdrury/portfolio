import React from "react";
import Button from "../Button/button.component";
import * as S from "./project-preview.styles";

const ProjectPreview = ({ id, title, description }) => {
  return (
    <S.ContentWrapper>
      <S.Heading>{title}</S.Heading>
      <S.Content>{description}</S.Content>
      <S.Link to={`/portfolio/projects/${id}`}>
        <Button type="secondary" width="175px">
          VIEW PROJECT
        </Button>
      </S.Link>
    </S.ContentWrapper>
  );
};

export default ProjectPreview;
