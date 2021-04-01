import React from "react";
import * as S from "./burger.styles";

const Burger = ({ handleClick, isOpen }) => {
  return isOpen ? (
    <S.CloseIcon onClick={handleClick} />
  ) : (
    <S.BurgerIcon onClick={handleClick} />
  );
};

export default Burger;
