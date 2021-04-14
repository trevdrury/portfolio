import styled, { css } from "styled-components";
import { colors } from "../../colors";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const textStyles = css`
  font-family: "Public Sans", sans-serif;
  font-size: 0.8125rem;
  line-height: 1.875rem;
`;

export const Label = styled.label`
  ${textStyles}
  font-weight: bold;
  opacity: 80%;
`;

const inputStyles = css`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 0.5625rem 1rem;
  background-color: ${colors.gray10};
  border: none;
  outline: none;

  &:focus {
    border: 1px solid ${colors.slightlyDesaturatedCyan};
  }

  &::placeholder {
    ${textStyles}
    font-weight: regular;
    color: ${colors.grayishDarkBlue};
    opacity: 40%;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  height: 6rem;
`;
