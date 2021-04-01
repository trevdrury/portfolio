import React from "react";
import * as S from "./dropdown.styles";

const Dropdown = ({ isOpen }) => {
  return (
    <S.Dropdown isOpen={isOpen}>
      <S.List>
        <S.ListItem>
          <S.Link to="/">HOME</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/portfolio">PORTFOLIO</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link to="/contact">CONTACT ME</S.Link>
        </S.ListItem>
      </S.List>
    </S.Dropdown>
  );
};

export default Dropdown;
