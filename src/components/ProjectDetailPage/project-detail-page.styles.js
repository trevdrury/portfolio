import styled from "styled-components";
import { colors, heading, subHeading, copy } from "../../colors";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  border-top: 1px solid ${colors.grayishDarkBlueOpacity};
  border-bottom: 1px solid ${colors.grayishDarkBlueOpacity};

  @media (min-width: 768px) {
    flex-direction: row;
    max-height: 248px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

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

export const Tags = styled.span`
  font-family: "Public Sans", sans-serif;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.875rem;
  color: ${colors.slightlyDesaturatedCyan};
`;
