import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors, heading, copy } from "../../colors";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.orientation};
  gap: 1.5rem;
  justify-content: center;
  padding: 1.5rem 0;
  border-top: 1px solid ${colors.grayishDarkBlueOpacity};
  border-bottom: 1px solid ${colors.grayishDarkBlueOpacity};

  @media (min-width: 769px) {
    display: flex;
    flex-basis: 100%;
    flex: 1;
    align-self: stretch;
    max-height: 400px;
  }
`;

export const Heading = styled.h2`
  ${heading}
  color: ${colors.grayishDarkBlue};
`;

export const Copy = styled.p`
  ${copy}
  color: ${colors.grayishDarkBlue};
`;

export const Link = styled(hyperLink)`
  text-decoration: none;
`;

export const Tags = styled.span`
  font-family: "Public Sans", sans-serif;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.875rem;
  color: ${colors.slightlyDesaturatedCyan};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;
