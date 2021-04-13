import { css } from "styled-components";

export const colors = {
  slightlyDesaturatedCyan: "hsl(167, 36%, 54%)",
  darkBlue: "hsl(205, 41%, 21%)",
  grayishDarkBlue: "hsl(245, 10%, 22%)",
  veryLightGray: "hsl(0, 0%, 98%)",
  lightGray: "hsl(240, 2%, 92%)",
  brightRed: "hsl(0, 90%, 57%)",
  grayishDarkBlueOpacity: "hsla(245, 10%, 22%, 0.15)",
};

export const heading = css`
  font-family: "Ibarra Real Nova", serif;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 2.625rem;
  letter-spacing: -0.36px;
`;

export const subHeading = css`
  font-family: "Ibarra Real Nova", serif;
  font-size: 2rem;
  line-height: 2.625rem;
  letter-spacing: -0.29px;
`;

export const copy = css`
  font-family: "Public Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.875rem;
  opacity: 80%;
`;
