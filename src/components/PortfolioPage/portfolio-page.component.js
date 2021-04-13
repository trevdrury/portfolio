import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions";
import ContactSection from "../ContactSection/contact-section.component";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import ProjectPreview from "../ProjectPreview/project-preview.component";
import * as S from "./portfolio-page.styles";

const PortfolioPage = ({ projects, fetchProjects }) => {
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const renderProjectList = () => {
    return projects.map((project) => {
      return (
        <S.ProjectWrapper key={project.id} id={project.id}>
          <ResponsiveImage
            mobileSrc={project.images.portfolio.mobile}
            tabletSrc={project.images.portfolio.tablet}
            desktopSrc={project.images.portfolio.desktop}
          />
          <ProjectPreview
            id={project.id}
            title={project.title}
            description={project.description}
            orientation="column"
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

export default connect(mapStateToProps, { fetchProjects })(PortfolioPage);
