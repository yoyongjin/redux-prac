import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  margin: 10px;
`;

const Todos = () => {
  const pushTodoHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <FormContainer>
      <form onSubmit={pushTodoHandler}>
        <input />
        <button type="submit">push!</button>
      </form>
    </FormContainer>
  );
};

export default Todos;
