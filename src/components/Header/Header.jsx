import styled from "styled-components";
import Toggle from "../shared/Toggle";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.mainText};
  h1 {
    font-size: 2em;
  }
`;

const Header = ({ currentTheme, onChangeTheme }) => {
  return (
    <Container>
      <h1>calc</h1>
      <Toggle label="theme" withNumbers currentTheme={currentTheme} onChangeTheme={onChangeTheme} />
    </Container>
  );
};

export default Header;
