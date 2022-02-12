import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Keys from "../Keys/Keys";
import Result from "../Result/Result";

const Container = styled.div`
  width: 100%;
  max-width: 485px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Calculator = ({ currentTheme, onChangeTheme }) => {
  return (
    <Container>
      <Header currentTheme={currentTheme} onChangeTheme={onChangeTheme} />
      <Result />
      <Keys />
    </Container>
  );
};

export default Calculator;
