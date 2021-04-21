import React from "react";
import Button from "../Button/button.component";
import * as S from "./project-preview.styles";

const ProjectPreview = ({
  id,
  title,
  description,
  tags,
  tools,
  orientation,
  link,
}) => {
  const renderTags = () => {
    if (tags) {
      return (
        <S.Tags>
          {tags}
          <br />
          {tools}
        </S.Tags>
      );
    }
  };

  const renderLink = () => {
    let pathName = document.location.pathname;
    if (pathName === "/portfolio") {
      return (
        <S.Link to={link}>
          <Button type="secondary" width="175px">
            VIEW PROJECT
          </Button>
        </S.Link>
      );
    }

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button type="secondary" width="175px">
          VIEW PROJECT
        </Button>
      </a>
    );
  };

  const renderContent = () => {
    if (orientation === "row") {
      return (
        <S.ContentWrapper orientation={orientation} className="preview">
          <S.Column>
            <S.Heading>{title}</S.Heading>
            {renderTags()}
            <Button type="secondary" width="178px">
              VIEW PROJECT
            </Button>
          </S.Column>
          <S.Column>
            <S.Copy>{description}</S.Copy>
          </S.Column>
        </S.ContentWrapper>
      );
    } else if (orientation === "column") {
      return (
        <S.ContentWrapper orientation={orientation} className="preview">
          <S.Heading>{title}</S.Heading>
          <S.Copy>{description}</S.Copy>
          {renderTags()}
          {renderLink()}
        </S.ContentWrapper>
      );
    }
  };

  return renderContent();
};

export default ProjectPreview;
