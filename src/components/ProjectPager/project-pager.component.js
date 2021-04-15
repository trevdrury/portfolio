import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import * as S from "./project-pager.styles";

const ProjectPager = ({ projects, currentProject }) => {
  const history = useHistory();
  const [current, setCurrent] = useState(currentProject);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    setNext((current + 1) % projects.length);
    if (current === 0) {
      let index = projects.length - 1;
      setPrevious(index);
    } else {
      setPrevious(current - 1);
    }
  }, [current, projects.length]);

  const handlePrevious = () => {
    history.push(`/portfolio/projects/${projects[previous].id}`);
    setCurrent(previous);
  };

  const handleNext = () => {
    history.push(`/portfolio/projects/${projects[next].id}`);
    setCurrent(next);
  };

  return (
    <S.ProjectPager>
      <S.PreviousProject onClick={handlePrevious}>
        <LeftArrow />
        <div>
          <S.Title>{projects[previous].title}</S.Title>
          <S.Destination>Previous Project</S.Destination>
        </div>
      </S.PreviousProject>
      <S.NextProject onClick={handleNext}>
        <RightArrow />
        <div>
          <S.Title>{projects[next].title}</S.Title>
          <S.Destination>Next Project</S.Destination>
        </div>
      </S.NextProject>
    </S.ProjectPager>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.projects),
  };
};

export default connect(mapStateToProps)(ProjectPager);
