import styled from "styled-components";
import Block from "../shared/Block";

const StyledBlock = styled(Block)`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 2.5em;
  text-align: right;
  background: ${(props) => props.theme.background3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Result = ({ result }) => {
  return <StyledBlock>{result}</StyledBlock>;
};

export default Result;
