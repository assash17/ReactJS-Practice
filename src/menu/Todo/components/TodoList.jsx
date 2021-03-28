import React from "react";
import styled from "styled-components";
import { useTodoState } from "../reducer/TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
  const state = useTodoState();
  return (
    <TodoListBlock>
      {state.map((todo) => {
        const { id, text, done } = todo;
        return <TodoItem key={id} id={id} text={text} done={done}></TodoItem>;
      })}
    </TodoListBlock>
  );
}

export default TodoList;
