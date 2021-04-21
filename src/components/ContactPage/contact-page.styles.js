import styled from "styled-components";
import { colors, heading, copy } from "../../styles";

export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
  border-top: 1px solid ${colors.grayishDarkBlueOpacity};
  border-bottom: 1px solid ${colors.grayishDarkBlueOpacity};
`;

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 2;
`;

export const Heading = styled.h2`
  ${heading}
  color: ${colors.grayishDarkBlue};
  flex: 1;
`;

export const Copy = styled.p`
  ${copy}
  opacity: 80%;
`;
