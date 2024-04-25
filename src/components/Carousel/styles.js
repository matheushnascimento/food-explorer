import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 3.2rem;
    font-weight: 400;
  }

  div {
    display: flex;
    gap: 2.3rem;
  }
`;
