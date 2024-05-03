import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    padding: 3.2rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 3.3rem;
  }

  svg {
    width: 3.4rem;
    height: 3.4rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 2.4rem;
    font-weight: bold;

    text-decoration: none;
  }

  img {
    width: 39rem;
    height: 38rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 4.7rem;

    margin: 4.2rem auto;

    padding: 4rem;
  }

  section > div {
    flex-direction: column;
    align-items: flex-start;

    gap: 2.4rem;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-size: 4rem;
    font-weight: medium;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-size: 2.4rem;
    font-weight: regular;
  }

  section > button {
    margin-top: 4.8rem;
  }

  ul {
    display: flex;
    gap: 1.2rem;
  }

  #quantity {
    display: flex;
    align-items: center;

    gap: 1.4rem;

    font-size: 2rem;
  }

  #plus_button,
  #minus_button {
    width: 2.4rem;
    height: 2.4rem;

    :hover {
      cursor: pointer;
    }
  }
`;
