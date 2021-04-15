import React from "react";
import { connect } from "react-redux";
import ContactSection from "../ContactSection/contact-section.component";
import ResponsiveImage from "../ResponsiveImage/responsive-image.component";
import ProjectPreview from "../ProjectPreview/project-preview.component";
import * as S from "./portfolio-page.styles";

const PortfolioPage = ({ projects }) => {
  const renderProjectList = () => {
    return projects.map((project) => {
      return (
        <S.ProjectWrapper key={project.id} id={project.id}>
          <ResponsiveImage
            smallSrc={
              require(`../../assets/images/portfolio/small/image-portfolio-${project.title}.jpg`)
                .default
            }
            largeSrc={
              require(`../../assets/images/portfolio/large/image-portfolio-${project.title}@2x.jpg`)
                .default
            }
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

export default connect(mapStateToProps)(PortfolioPage);
