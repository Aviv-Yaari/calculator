import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DevTools from "../DevTools/DevTools";
import Header from "../Header/Header";
import Keys from "../Keys/Keys";
import Result from "../Result/Result";
import useCalcLogic from "./useCalcLogic";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: calc(10em + 320px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 10px;
`;

const Calculator = ({ currentTheme, onChangeTheme }) => {
  const { result, previousResult, operation, isReset, handleKeyClick, handleKeyboardClick } = useCalcLogic();
  const wrapperRef = useRef();

  useEffect(() => {
    wrapperRef.current.focus();
  }, []);

  return (
    <MainWrapper ref={wrapperRef} onKeyDown={handleKeyboardClick} tabIndex="0">
      <Container>
        <Header currentTheme={currentTheme} onChangeTheme={onChangeTheme} />
        <Result result={result} />
        <Keys onKeyClick={handleKeyClick} />
        <DevTools operation={operation} result={result} previousResult={previousResult} isReset={isReset} />
      </Container>
    </MainWrapper>
  );
};

export default Calculator;
