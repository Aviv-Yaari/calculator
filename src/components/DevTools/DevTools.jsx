import { useState } from "react";
import styled from "styled-components";
import Toggle from "../shared/Toggle/Toggle";

const Container = styled.section`
  line-height: 1.5;
  border: 1px dashed black;
  padding: 10px;
`;

const DevTools = ({ operation, result, previousResult, isReset }) => {
  const [isActivated, setIsActivated] = useState(false);
  const handleToggle = () => setIsActivated((isActivated) => !isActivated);
  return (
    <>
      <Toggle label="Devtools" current={isActivated ? 1 : 0} onChange={handleToggle} totalOptions={2} />
      {isActivated && (
        <Container>
          <div>operation: {operation || "none"}</div>
          <div>result: {result || "none"}</div>
          <div>previousResult: {previousResult || "none"}</div>
          <div>isReset: {isReset.toString() || "none"}</div>
        </Container>
      )}
    </>
  );
};

export default DevTools;
