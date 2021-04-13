import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors } from "../../colors";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(32, 58, 76, 0.15);
  border-bottom: 1px solid rgba(32, 58, 76, 0.15);

  @media (min-width: 769px) {
    display: flex;
    flex-basis: 100%;
    flex: 1;
    align-self: stretch;
  }
`;

export const Heading = styled.h2`
  font-family: "Ibarra Real Nova", serif;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 2.625rem;
  letter-spacing: -0.36px;
  color: ${colors.grayishDarkBlue};
`;

export const Content = styled.p`
  font-family: "Public Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.875rem;
  color: ${colors.grayishDarkBlue};
  opacity: 80%;
`;

export const Link = styled(hyperLink)`
  text-decoration: none;
`;
