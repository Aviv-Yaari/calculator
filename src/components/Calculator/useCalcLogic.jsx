import { useState } from "react";
import { performOperation } from "../../utils/utils";

const useCalcLogic = () => {
  const [result, setResult] = useState(0);
  const [previousResult, setPreviousResult] = useState(0);
  const [operation, setOperation] = useState(null);
  const [isReset, setIsReset] = useState(false);

  const handleKeyboardClick = ({ key }) => {
    if (!isNaN(key)) {
      handleKeyClick(+key);
    } else if (["+", "-", "*", "/", "."].includes(key)) {
      handleKeyClick(key);
    } else if (key === "Backspace") {
      handleKeyClick("DEL");
    } else if (key === "Enter") {
      handleKeyClick("=");
    }
  };

  const handleKeyClick = (value) => {
    console.log("handleKeyClick (" + value + ")");
    console.log("typeof value: ", typeof value);
    switch (value) {
      case ".":
        setResult((result) => result + ".");
        break;
      case "DEL":
        setResult((result) => {
          if (typeof result === "number") {
            if (result % 1) return parseFloat(result.toString().slice(0, -1));
            else return parseInt(result / 10);
          } else if (typeof result === "string" && result.charAt(result.length - 1) === ".") return parseInt(result);
        });
        break;
      case "RESET":
        setResult(0);
        setIsReset(true);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        operation && setResult(performOperation(previousResult, result, operation));
        setOperation(value);
        setIsReset(true);
        break;
      case "=":
        setPreviousResult(0);
        previousResult && setResult(performOperation(previousResult, result, operation));
        setOperation(null);
        setIsReset(true);
        break;
      default:
        if (isReset) {
          if (operation) {
            setPreviousResult(result);
          }
          setResult(value);
        } else {
          setResult((result) => {
            if (typeof result === "number") {
              if (result % 1) return parseFloat(result.toString() + value);
              else return result * 10 + value;
            } else if (typeof result === "string" && result.charAt(result.length - 1) === ".") {
              return parseFloat(result + value);
            }
          });
        }
        setIsReset(false);
        break;
    }
  };
  return { result, previousResult, operation, isReset, handleKeyClick, handleKeyboardClick };
};

export default useCalcLogic;
