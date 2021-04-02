import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { colors } from "../../colors.js";
import * as S from "./header.styles";
import Burger from "../Burger/burger.component";
import Dropdown from "../Dropdown/dropdown.component";
import SiteMenu from "../SiteMenu/site-menu.component";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width] = useWindowSize();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderMenu = () => {
    if (width < 769) {
      return (
        <div>
          <Burger handleClick={handleClick} isOpen={isOpen} />
          <Dropdown isOpen={isOpen} />
        </div>
      );
    } else {
      return <SiteMenu orientation="row" color={colors.grayishDarkBlue} />;
    }
  };

  return (
    <S.Navigation>
      <Link to="/">
        <Logo />
      </Link>
      {renderMenu()}
    </S.Navigation>
  );
};

export default Header;
