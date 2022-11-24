import React from "react";
import styled from "styled-components";
import Todos from "./components/Todos";

const AppContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ddd;
`;

const App = () => {
  return (
    <AppContainer>
      <Todos />
    </AppContainer>
  );
};
export default App;
