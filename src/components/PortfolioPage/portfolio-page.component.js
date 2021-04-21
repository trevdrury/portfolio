import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import ContactSection from "../ContactSection/contact-section.component";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import ProjectPreview from "../ProjectPreview/project-preview.component";
import * as S from "./portfolio-page.styles";

const PortfolioPage = ({ projects }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const renderProjectList = () => {
    return projects.map((project) => {
      let baseUrl = `${process.env.PUBLIC_URL}/assets/portfolio`;
      return (
        <S.ProjectWrapper key={project.id} id={project.id}>
          <ResponsiveImage
            mobile={`${baseUrl}/mobile/image-portfolio-${project.title}`}
            tablet={`${baseUrl}/tablet/image-portfolio-${project.title}`}
            desktop={`${baseUrl}/desktop/image-portfolio-${project.title}`}
          />
          <ProjectPreview
            id={project.id}
            title={project.title}
            description={project.description}
            orientation="column"
            link={`/portfolio/projects/${project.id}`}
          />
        </S.ProjectWrapper>
      );
    });
  };

  return (
    <div>
      <S.PortfolioPage>{renderProjectList()}</S.PortfolioPage>
      <ContactSection />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.projects),
  };
};

export default connect(mapStateToProps)(PortfolioPage);
