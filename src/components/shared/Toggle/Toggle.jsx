import { Button, Circle, Container, Label, OptionLabel } from "./Toggle.styled";

const Toggle = ({ label, current, totalOptions, showOptionLabels, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button onClick={onChange}>
        {showOptionLabels &&
          [...Array(totalOptions).keys()].map((optionNum) => (
            <OptionLabel key={optionNum} value={optionNum} totalOptions={totalOptions}>
              {optionNum + 1}
            </OptionLabel>
          ))}
        <Circle current={current} totalOptions={totalOptions} />
      </Button>
    </Container>
  );
};

export default Toggle;
