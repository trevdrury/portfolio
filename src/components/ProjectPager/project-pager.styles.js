import styled, { css } from "styled-components";
import { colors, subHeading, copy } from "../../styles";

export const ProjectPager = styled.div`
  display: flex;
  border-top: 1px solid ${colors.grayishDarkBlueOpacity};
  border-bottom: 1px solid ${colors.grayishDarkBlueOpacity};
  margin-top: 4rem;
  cursor: pointer;
`;

const column = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  width: 50%;
`;

export const PreviousProject = styled.div`
  ${column}
  align-items: flex-start;
`;

export const NextProject = styled.div`
  ${column}
  align-items: flex-end;
  text-align: right;
  border-left: 1px solid ${colors.grayishDarkBlueOpacity};
`;

export const Title = styled.h3`
  ${subHeading}
  line-height: 2.25rem;
  color: ${colors.grayishDarkBlue};
`;

export const Destination = styled.span`
  ${copy}
  color: ${colors.grayishDarkBlue};
  opacity: 50%;
`;
