import React from "react";
import * as S from "./site-menu.styles";

const SiteMenu = ({ orientation, color }) => {
  return (
    <S.List orientation={orientation}>
      <S.ListItem>
        <S.Link to="/" color={color}>
          HOME
        </S.Link>
      </S.ListItem>
      <S.ListItem>
        <S.Link to="/portfolio" color={color}>
          PORTFOLIO
        </S.Link>
      </S.ListItem>
      <S.ListItem>
        <S.Link to="/contact" color={color}>
          CONTACT ME
        </S.Link>
      </S.ListItem>
    </S.List>
  );
};

export default SiteMenu;
