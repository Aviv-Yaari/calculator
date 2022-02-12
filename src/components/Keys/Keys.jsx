import { Container, Key } from "./Keys.styled";

const values = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*", "RESET", "="];

const Keys = ({ onKeyClick }) => {
  return (
    <Container>
      {values.map((value) => {
        let type;
        if (value === "DEL" || value === "RESET") type = "action";
        else if (value === "=") type = "mainAction";
        else type = "digit";
        return (
          <Key key={value} value={value} type={type} onClick={() => onKeyClick(value)}>
            {value}
          </Key>
        );
      })}
    </Container>
  );
};

export default Keys;
