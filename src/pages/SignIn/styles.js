import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25.4rem;

  min-height: 100vh;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  min-width: 44rem;

  padding: 6.4rem;

  gap: 3.2rem;

  border-radius: 1.6rem;

  background: ${({ theme }) => theme.COLORS.BLUE_200};

  h1 {
    align-self: center;
    font-weight: 400;
    font-size: 3.2rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;

    gap: 0.8rem;
  }

  label {
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 1.6rem;
  }

  input {
    background: none;

    padding: 1.2rem 1.4rem;

    border: solid 0.1rem white;
    border-radius: 0.8rem;
  }

  a {
    align-self: center;

    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    text-decoration: none;
  }

  @media (max-width: 968px) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    h1 {
      display: none;
    }

    input {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      border: none;
    }
  }
`;
