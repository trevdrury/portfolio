import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors } from "../../colors.js";

export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.orientation};
  align-items: center;
  gap: ${(props) => (props.orientation === "row" ? "2.625rem" : "2rem")};
`;

export const ListItem = styled.li`
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-align: center;
`;

export const Link = styled(hyperLink)`
  cursor: pointer;
  color: ${(props) => props.color};
  text-decoration: none;

  &:hover {
    color: ${colors.slightlyDesaturatedCyan};
  }
`;
