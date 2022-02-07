import * as S from "./styles";

const values = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "RESET", "="];

const Keys = () => {
  return (
    <S.Container>
      {values.map((value) => (
        <S.Key key={value} value={value}>
          {value}
        </S.Key>
      ))}
    </S.Container>
  );
};

export default Keys;
