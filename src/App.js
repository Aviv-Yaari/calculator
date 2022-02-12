import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle.styled";
import styled from "styled-components";
import theme, { THEMES } from "./assets/styles/theme.styled";
import { Reset } from "styled-reset";
import Calculator from "./components/Calculator/Calculator";

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);

  const handleChangeTheme = () => {
    setCurrentTheme((current) => (current === 2 ? 0 : current + 1));
  };

  return (
    <>
      <Reset />
      <ThemeProvider theme={theme[THEMES[currentTheme]]}>
        <GlobalStyle />
        <Calculator currentTheme={currentTheme} onChangeTheme={handleChangeTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
