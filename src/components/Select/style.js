import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  label {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.6rem;
  }

  select {
    width: 36.4rem;
    height: 4.8rem;

    padding: 1.6rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border: none;
    border-radius: 0.5rem;
  }
`;
