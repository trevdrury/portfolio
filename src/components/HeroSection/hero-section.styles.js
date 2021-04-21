import styled from "styled-components";
import { colors } from "../../styles";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  overflow: hidden;

  @media (min-width: 769px) {
    position: relative;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 769px) {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 514px;
    background-color: ${colors.veryLightGray};
    padding-top: 3.5rem;
    padding-right: 3.5rem;
  }
`;

export const Heading = styled.h2`
  font-family: "Ibarra Real Nova", serif;
  font-size: 2.5rem;
  line-height: 2.625rem;
  letter-spacing: -0.29px;

  @media (min-width: 1025px) {
    font-size: 3.125rem;
    line-height: 3.125rem;
    letter-spacing: -0.45px;
  }
`;
