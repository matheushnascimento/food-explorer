import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.2rem;

  width: 100vw;
  height: 100%;

  padding: 2.4rem 12.3rem;

  background: ${({ theme }) => theme.COLORS.BLUE_200};

  img {
    width: 18.6rem;
  }

  .input-wrapper {
    display: flex;
    flex-grow: 1;

    gap: 1.4rem;

    width: 100%;

    border-radius: 0.5rem;

    padding: 1.2rem 1.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  svg {
    width: 3.2rem !important;
    height: 3.2rem !important;
  }

  input {
    width: 100%;

    background: none;
    border: none;
  }
`;
