import styled from "styled-components";

export const PortfolioPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

export const ProjectWrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.id % 2 === 0 ? "row-reverse" : "row")};
    gap: 4.313rem;
  }

  @media (min-width: 1025px) {
    gap: 7.813rem;
  }
`;
