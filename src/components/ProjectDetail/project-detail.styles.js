import styled from "styled-components";
import { colors, heading, subHeading, copy } from "../../styles";

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Heading = styled.h2`
  ${heading}
  color: ${colors.grayishDarkBlue};
`;

export const SubHeading = styled.h3`
  ${subHeading}
  padding-bottom: 0.5rem;
  color: ${colors.grayishDarkBlue};
`;

export const Copy = styled.p`
  ${copy}
  color: ${colors.grayishDarkBlue};
`;
