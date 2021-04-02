import styled from "styled-components";
import { colors } from "../../colors.js";

export const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? "inherit" : "none")};
  position: absolute;
  bottom: -210px;
  right: 0;
  width: 223px;
  max-height: 186px;
  background-color: ${colors.grayishDarkBlue};
  padding: 2.5rem 0;
`;
