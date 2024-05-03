import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  textarea {
    width: 100%;
    height: 150px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    padding: 1.4rem;
    border-radius: 10px;

    padding: 16px;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
