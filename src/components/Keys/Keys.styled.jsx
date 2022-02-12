import styled from "styled-components";
import Block from "../shared/Block";

export const Container = styled(Block)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background: ${(props) => props.theme.background2};
`;

export const Key = styled.button`
  border: none;
  font-family: inherit;
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  color: ${(props) => props.theme.key[props.type]?.textColor || props.theme.keyText};
  font-size: ${(props) => props.theme.key[props.type]?.fontSize || "1em"};
  background: ${(props) => props.theme.key[props.type]?.background};
  box-shadow: 0 3px 0 0 ${(props) => props.theme.key[props.type]?.shadow};
  display: grid;
  place-content: center;
  transition: all 250ms;
  &:last-of-type {
    grid-column: 3/5;
  }
  &:nth-last-of-type(2) {
    grid-column: 1/3;
  }
  &:hover {
    background: ${(props) => props.theme.key[props.type]?.shadow};
  }
`;
