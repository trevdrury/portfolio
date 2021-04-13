import React from "react";
import * as S from "./button.styles";

const Button = ({ type, width, disabled, onClick, children }) => {
  const renderIconContainer = () => {
    if (type === "primary") {
      return (
        <S.IconContainer>
          <S.ArrowsIcon />
        </S.IconContainer>
      );
    }
  };

  return (
    <S.ButtonContainer
      type={type}
      width={width}
      disabled={disabled}
      onClick={onClick}
    >
      {renderIconContainer()}
      <S.ButtonText>{children}</S.ButtonText>
    </S.ButtonContainer>
  );
};

export default Button;
