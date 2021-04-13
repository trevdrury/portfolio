import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { fetchProject } from "../../actions";
import useWindowSize from "../hooks/useWindowSize";
import ContactSection from "../ContactSection/contact-section.component";
import Button from "../Button/button.component";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import * as S from "./project-detail-page.styles";

const ProjectDetailPage = ({ project, fetchProject }) => {
  const [width] = useWindowSize();
  let { id } = useParams();

  useEffect(() => {
    fetchProject(id);
  }, [id, fetchProject]);

  const renderContent = () => {
    if (width < 768) {
      return (
        <S.ContentContainer>
          <S.Heading>{project.title}</S.Heading>
          <S.Copy>{project.description}</S.Copy>
          <S.Tags>
            {project.tags} <br /> {project.tools}
          </S.Tags>
          <Button type="secondary" width="178px">
            VIEW PROJECT
          </Button>
        </S.ContentContainer>
      );
    } else if (width < 1025) {
      return (
        <S.ContentContainer>
          <S.Column>
            <S.Heading>{project.title}</S.Heading>
            <S.Tags>
              {project.tags} <br /> {project.tools}
            </S.Tags>
            <Button type="secondary" width="178px">
              VIEW PROJECT
            </Button>
          </S.Column>
          <S.Column>
            <S.Copy>{project.description}</S.Copy>
          </S.Column>
        </S.ContentContainer>
      );
    }
  };

  if (!project) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ResponsiveImage
        mobileSrc={project.images.detail.heroImage.mobile}
        tabletSrc={project.images.detail.heroImage.tablet}
        desktopSrc={project.images.detail.heroImage.desktop}
      />
      {renderContent()}
      <S.BackgroundContainer>
        <S.SubHeading>Project Background</S.SubHeading>
        <S.Copy>{project.background}</S.Copy>
      </S.BackgroundContainer>
      <S.PreviewContainer>
        <S.SubHeading>Static Previews</S.SubHeading>
        <ResponsiveImage
          mobileSrc={project.images.detail.previewImageOne.mobile}
          tabletSrc={project.images.detail.previewImageOne.tablet}
          desktopSrc={project.images.detail.previewImageOne.desktop}
        />
        <ResponsiveImage
          mobileSrc={project.images.detail.previewImageTwo.mobile}
          tabletSrc={project.images.detail.previewImageTwo.tablet}
          desktopSrc={project.images.detail.previewImageTwo.desktop}
        />
      </S.PreviewContainer>
      <ContactSection />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchProject })(ProjectDetailPage);
