import * as S from "./Keys.styled";

const values = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "RESET", "="];

const Keys = () => {
  return (
    <S.Container>
      {values.map((value) => {
        let type;
        if (value === "DEL" || value === "RESET") type = "action";
        else if (value === "=") type = "mainAction";
        else type = "digit";
        return (
          <S.Key key={value} value={value} type={type}>
            {value}
          </S.Key>
        );
      })}
    </S.Container>
  );
};

export default Keys;
