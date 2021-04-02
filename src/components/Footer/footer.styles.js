import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors } from "../../colors.js";

export const Footer = styled.div`
  margin: 0;
  padding: 3.5rem 0;
  background-color: ${colors.grayishDarkBlue};

  @media (min-width: 769px) {
    padding: 1.5rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Link = styled(hyperLink)`
  svg {
    filter: brightness(0) invert(1);
  }
`;
