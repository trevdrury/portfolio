import styled, { css } from "styled-components";
import { ReactComponent as DownArrows } from "../../assets/down-arrows.svg";
import { colors } from "../../colors.js";

export const IconContainer = styled.div`
  min-width: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const primaryStyles = css`
  color: white;
  background-color: ${colors.darkBlue};
  border: none;

  &:hover {
    background-color: ${colors.slightlyDesaturatedCyan};
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

const secondaryStyles = css`
  color: ${colors.grayishDarkBlue};
  background-color: ${colors.veryLightGray};
  border: 1px solid ${colors.grayishDarkBlue};

  &:hover {
    color: white;
    background-color: ${colors.grayishDarkBlue};
  }

  &:disabled {
    background-color: white;
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const ButtonContainer = styled.button`
  ${(props) => (props.type === "primary" ? primaryStyles : secondaryStyles)}
  width: ${(props) => props.width};
  height: 3rem;
  display: flex;
  padding: 0;
  cursor: pointer;

  &:hover svg {
    filter: grayscale(100%) brightness(2);
  }
`;

export const ButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const ArrowsIcon = styled(DownArrows)`
  width: 1rem;
`;
