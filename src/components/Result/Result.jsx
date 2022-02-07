import styled from "styled-components";
import Block from "../shared/Block";

const StyledBlock = styled(Block)`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 2.5em;
  text-align: right;
  background: ${(props) => props.theme.background3};
`;

const Result = () => {
  return <StyledBlock>399,981</StyledBlock>;
};

export default Result;
