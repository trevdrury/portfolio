import styled from "styled-components";
import { colors } from "../../colors";
import profileImgTablet from "../../assets/tablet-image-homepage-profile@2x.jpg";
import profileImgDesktop from "../../assets/desktop-image-homepage-profile@2x.jpg";
import profileImgMobile from "../../assets/mobile-image-homepage-profile@2x.jpg";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.25rem 0;
  gap: 2rem;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 4.313rem;
  }

  @media (min-width: 1025px) {
    gap: 7.813rem;
  }
`;

export const Image = styled.div`
  background: url(${profileImgMobile}) no-repeat;
  background-size: 311px 346px;
  width: 311px;
  height: 346px;

  @media (min-width: 769px) {
    background: url(${profileImgTablet}) no-repeat;
    background-size: 281px 600px;
    background-position: top right;
    width: 281px;
    height: 600px;
  }

  @media (min-width: 1025px) {
    background: url(${profileImgDesktop}) no-repeat;
    background-size: 540px 600px;
    background-position: top right;
    width: 540px;
    height: 600px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(32, 58, 76, 0.15);
  border-bottom: 1px solid rgba(32, 58, 76, 0.15);
  padding-top: 2rem;
  padding-bottom: 51px;

  @media (min-width: 769px) {
    min-width: 339px;
    max-width: 350px;
    height: 600px;
  }
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
  opacity: 80%;
`;
