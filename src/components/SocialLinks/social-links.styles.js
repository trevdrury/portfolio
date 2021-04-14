import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  svg {
    filter: ${(props) => (props.dark ? "none" : "brightness(0) invert(1)")};
  }
`;
