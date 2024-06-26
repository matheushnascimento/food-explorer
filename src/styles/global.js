import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :root {
    font-size: 62.5%;
  }


  body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`;
