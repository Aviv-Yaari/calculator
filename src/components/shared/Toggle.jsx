import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 4px 20px;
  cursor: pointer;
`;

const Circle = styled.div`
  background: ${(props) => props.theme.toggleBackground};
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  left: ${(props) => props.currentTheme * 15 - 15}px;
  transition: left 250ms;
`;

const Toggle = ({ label, currentTheme, onChangeTheme }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button onClick={onChangeTheme}>
        <Circle currentTheme={currentTheme} />
      </Button>
    </Container>
  );
};

export default Toggle;
