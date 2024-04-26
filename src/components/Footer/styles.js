import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  height: 7.7rem;

  padding: 2.4rem 12.3rem;

  background: ${({ theme }) => theme.COLORS.BLUE_200};

  img {
    width: 18.6rem;
    height: 3rem;
  }

  p {
    font-family: "Roboto", sans-serif;

    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
`;
