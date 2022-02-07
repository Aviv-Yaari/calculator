import styled from "styled-components";
import Block from "../shared/Block";

export const Container = styled(Block)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background: ${(props) => props.theme.background2};
`;

export const Key = styled.div`
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.keyText};
  font-size: ${(props) => (props.value === "DEL" || props.value === "RESET" ? "1em" : "1.5em")};
  background: ${(props) => props.theme.keyBackground2};
  box-shadow: 0 3px 0 0 ${(props) => props.theme.keyShadow2};
  display: grid;
  place-content: center;
  &:last-of-type {
    grid-column: 3/5;
  }
  &:nth-last-of-type(2) {
    grid-column: 1/3;
  }
`;
