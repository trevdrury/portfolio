import styled from "styled-components";
import { colors } from "../../styles";

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding-top: 7.188rem;
  padding-bottom: 5rem;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 0;
    padding: 6rem 0;
  }

  @media (min-width: 1025px) {
    padding: 9.375rem 0;
  }
`;

export const Heading = styled.h2`
  max-width: 350px;
  font-family: "Ibarra Real Nova", serif;
  font-size: 2.5rem;
  line-height: 2.625rem;
  letter-spacing: -0.36px;
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  }
`;

export const HR = styled.hr`
  display: none;
  border-top: 1px solid ${colors.grayishDarkBlue};
  opacity: 15%;

  @media (min-width: 769px) {
    display: inherit;
    flex-grow: 1;
    margin-right: 2rem;
  }
`;
