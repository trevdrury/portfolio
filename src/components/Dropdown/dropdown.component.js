import React from "react";
import SiteMenu from "../SiteMenu/site-menu.component";
import * as S from "./dropdown.styles";

const Dropdown = ({ isOpen }) => {
  return (
    <S.Dropdown isOpen={isOpen}>
      <SiteMenu orientation="column" color="white" />
    </S.Dropdown>
  );
};

export default Dropdown;
