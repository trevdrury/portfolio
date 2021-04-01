import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors } from "../../colors";

export const Navigation = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  gap: 42px;
`;

export const ListItem = styled.li`
  font-size: 0.75rem;
  letter-spacing: 2px;
`;

export const Link = styled(hyperLink)`
  color: ${colors.grayishDarkBlue};
  text-decoration: none;

  &:hover {
    color: ${colors.slightlyDesaturatedCyan};
  }
`;
