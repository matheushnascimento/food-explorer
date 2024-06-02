import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 30.4rem;
  height: 46.2rem;

  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  gap: 1.5rem;

  padding: 2.4rem;

  border-radius: 0.8rem;

  background: ${({ theme }) => theme.COLORS.BLUE_600};

  > svg {
    position: absolute;

    right: 2.4rem;
    top: 2.4rem;

    width: 2.4rem;
    height: 2.4rem;

    & {
      cursor: pointer;
    }
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-size: 2.4rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 1.4rem;
  }

  span {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    justify-items: bottom;
    font-size: 3.2rem;
  }
`;
