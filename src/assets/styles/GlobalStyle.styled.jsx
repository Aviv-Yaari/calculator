import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spartan', sans-serif;
    background: ${(props) => props.theme.background1}
  }
`;

export default GlobalStyle;
