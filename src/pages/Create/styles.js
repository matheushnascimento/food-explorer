import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  main {
    width: 90%;
    padding: 3.2rem;
  }

  main > div:first-child {
    display: flex;
    align-items: center;
  }

  div > svg {
    width: 3.4rem;
    height: 3.4rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 2.4rem;
    font-weight: bold;

    text-decoration: none;
  }

  h1 {
    margin: 2.4rem 0 3.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  section {
    display: flex;
    gap: 3.2rem;
  }

  section:nth-child(2) > .input-wrapper:first-child {
    display: flex;
    flex-direction: column;

    flex-grow: 1;
    gap: 1rem;
  }

  span {
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.6rem;

    background: none;
  }

  input[type="file"] {
    display: none;
  }

  #name {
    flex-grow: 1;
  }

  #dishImage {
    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    max-width: 24rem;
    height: 4.8rem;

    div {
      justify-content: center;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      padding: 1.2rem 3.2rem;

      border-radius: 0.8rem;
    }

    label {
      align-items: center;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  #ingredients_label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  ul {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 1.6rem;

    height: auto;

    padding: 0.4rem 0.8rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border-radius: 0.8rem;
    flex-wrap: wrap;
  }

  #submit_button {
    align-self: flex-end;

    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;
