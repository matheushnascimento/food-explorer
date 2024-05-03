import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.8rem;

  padding: 1.2rem 3.2rem;

  border: none;
  border-radius: 0.5rem;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  cursor: pointer;
`;
