import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spartan', sans-serif;
    background: ${(props) => props.theme.background1};
    transition: background-color 250ms;
  }
`;

export default GlobalStyle;
