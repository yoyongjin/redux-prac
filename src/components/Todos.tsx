import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoForm = styled.form`
  /* box-sizing: border-box; */
  display: flex;

  width: 15%;
  justify-content: center;
  gap: 5px;
  /* align-items: center; */
  background-color: #eaea;
  padding: 10px;
`;

const Todos = () => {
  const pushTodoHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <TodoForm onSubmit={pushTodoHandler}>
      <input />
      <button type="submit">push!</button>
    </TodoForm>
  );
};

export default Todos;
