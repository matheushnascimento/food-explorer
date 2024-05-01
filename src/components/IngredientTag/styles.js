import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem 1.6rem;

  background: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 0.8rem;

  input,
  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;

    color: ${({ theme, $isnew }) =>
      $isnew ? `${theme.COLORS.GRAY_300}` : "white"};
  }

  input {
    max-width: 12rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }
`;
