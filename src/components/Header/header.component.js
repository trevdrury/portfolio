import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";
import * as S from "./header.styles";
import Burger from "../Burger/burger.component";
import Dropdown from "../Dropdown/dropdown.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";

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
      return (
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
      );
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
