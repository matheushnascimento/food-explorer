import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;

  padding: 1.2rem 3.2rem;

  border: none;
  border-radius: 0.5rem;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  cursor: pointer;
`;
