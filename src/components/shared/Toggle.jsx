import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;

const Label = styled.span`
  margin-right: 20px;
  text-transform: uppercase;
  font-size: 0.8em;
`;

const Button = styled.button`
  background: ${(props) => props.theme.background2};
  border: none;
  border-radius: 10px;
  padding: 4px 25px;
  cursor: pointer;
  position: relative;
  font-family: inherit;
  color: inherit;
`;

const Circle = styled.div`
  background: ${(props) => props.theme.toggleBackground};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  left: ${(props) => {
    const minPosition = -20;
    const maxPosition = 20;
    const stepSize = (maxPosition - minPosition) / (props.totalOptions - 1);
    return minPosition + stepSize * props.current;
  }}px;
  transition: left 250ms;
`;

const OptionLabel = styled.span`
  font-size: 0.85em;
  position: absolute;
  bottom: 26px;
  left: ${(props) => {
    const minPosition = 9;
    const maxPosition = 49;
    const stepSize = (maxPosition - minPosition) / (props.totalOptions - 1);
    return minPosition + stepSize * props.value;
  }}px;
`;

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
