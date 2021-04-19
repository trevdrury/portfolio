import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";
import ContactSection from "../ContactSection/contact-section.component";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import ProjectPreview from "../ProjectPreview/project-preview.component";
import ProjectDetail from "../ProjectDetail/project-detail.component";
import ProjectPager from "../ProjectPager/project-pager.component";
import * as S from "./project-detail-page.styles";

const ProjectDetailPage = ({ project }) => {
  const [width] = useWindowSize();
  const [baseUrl] = useState(`${process.env.PUBLIC_URL}/assets/detail`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!project) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ResponsiveImage
        mobile={`${baseUrl}/mobile/image-${project.title}-hero`}
        tablet={`${baseUrl}/tablet/image-${project.title}-hero`}
        desktop={`${baseUrl}/desktop/image-${project.title}-hero`}
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
        <ProjectDetail project={project.title} copy={project.background} />
      </S.Wrapper>
      <ProjectPager currentProject={project.id - 1} />
      <ContactSection />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[ownProps.match.params.id - 1],
  };
};

export default connect(mapStateToProps)(ProjectDetailPage);
