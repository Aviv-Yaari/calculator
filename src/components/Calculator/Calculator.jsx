import React, { useEffect, useRef } from "react";
import DevTools from "../DevTools/DevTools";
import Header from "../Header/Header";
import Keys from "../Keys/Keys";
import Result from "../Result/Result";
import { Container, MainWrapper } from "./Calculator.styled";
import useCalcLogic from "./useCalcLogic";

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
