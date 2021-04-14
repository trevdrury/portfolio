import styled from "styled-components";
import { colors, heading, copy } from "../../colors";

export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
  border-top: 1px solid ${colors.grayishDarkBlueOpacity};
  border-bottom: 1px solid ${colors.grayishDarkBlueOpacity};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Heading = styled.h2`
  ${heading}
  color: ${colors.grayishDarkBlue}
`;

export const Copy = styled.p`
  ${copy}
  opacity: 80%;
`;
