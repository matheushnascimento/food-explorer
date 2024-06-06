import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  :hover {
    cursor: pointer;
  }

  label {
    display: flex;

    gap: 0.8rem;

    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    background: none;
  }

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.2rem 1.4rem;

    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    border: none;
    border-radius: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.6rem;
    }
  }
`;
