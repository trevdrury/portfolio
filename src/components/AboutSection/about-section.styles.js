import styled from "styled-components";
import { colors } from "../../colors";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5.5rem 0;
  gap: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(32, 58, 76, 0.15);
  border-bottom: 1px solid rgba(32, 58, 76, 0.15);
  padding-top: 2rem;
  padding-bottom: 51px;
`;

export const Heading = styled.h2`
  font-family: "Ibarra Real Nova", serif;
  font-size: 2.5rem;
  line-height: 2.625rem;
  letter-spacing: -0.36px;
`;

export const Copy = styled.p`
  font-size: 1rem;
  line-height: 1.875rem;
  color: ${colors.grayishDarkBlue};
  padding: 1.5rem 0;
`;
