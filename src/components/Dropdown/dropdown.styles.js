import styled from "styled-components";
import { Link as hyperLink } from "react-router-dom";
import { colors } from "../../colors.js";

export const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? "inherit" : "none")};
  position: absolute;
  bottom: -210px;
  right: 0;
  width: 223px;
  height: 186px;
  background-color: ${colors.grayishDarkBlue};
  padding: 2.5rem 0;
`;

export const List = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
