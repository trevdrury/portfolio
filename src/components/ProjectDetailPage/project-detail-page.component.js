import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { fetchProject } from "../../actions";
import useWindowSize from "../hooks/useWindowSize";
import ContactSection from "../ContactSection/contact-section.component";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import ProjectPreview from "../ProjectPreview/project-preview.component";
import ProjectDetail from "../ProjectDetail/project-detail.component";
import ProjectPager from "../ProjectPager/project-pager.component";
import * as S from "./project-detail-page.styles";

const ProjectDetailPage = ({ project, fetchProject }) => {
  const [width] = useWindowSize();
  let { id } = useParams();

  useEffect(() => {
    fetchProject(id);
  }, [id, fetchProject]);

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
      <S.Wrapper>
        <ProjectPreview
          id={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          tools={project.tools}
          orientation={width > 768 && width < 1024 ? "row" : "column"}
        />
        <ProjectDetail
          copy={project.background}
          images={project.images.detail}
        />
      </S.Wrapper>
      <ProjectPager currentProject={project.id - 1} />
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
