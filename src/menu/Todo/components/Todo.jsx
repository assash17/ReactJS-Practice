import React from "react";
import { createGlobalStyle } from "styled-components";
import { TodoProvider } from "../reducer/TodoContext";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";
// import "./App.scss";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#e9ecef;
  }
`;

function Todo() {
  return (
    <TodoProvider>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default Todo;
