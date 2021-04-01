import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors } from "../../colors.js";

export const Footer = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${colors.grayishDarkBlue};
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 0.75rem;
  letter-spacing: 2px;
`;

export const Link = styled(hyperLink)`
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${colors.slightlyDesaturatedCyan};
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  svg {
    filter: brightness(0) invert(1);
  }
`;
