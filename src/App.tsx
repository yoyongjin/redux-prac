import React from "react";
import Todos from "./components/Todos";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Todos />
    </>
  );
};
export default App;
