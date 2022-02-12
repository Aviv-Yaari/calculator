import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    font-family: 'Spartan', sans-serif;
    background: ${(props) => props.theme.background1};
    transition: background-color 250ms;
    color: ${(props) => props.theme.mainText}
  }
`;

export default GlobalStyle;
