import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 7.813rem;
    justify-content: space-between;
    margin-top: 7.188rem;

    & > div {
      &.preview {
        min-width: 350px;
        padding: 3rem 0;
      }
    }
  }
`;
