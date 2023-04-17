import React from "react";
import Container from "../Components/Container";
import { useTodo } from "../Context/todo-context";
import Todo from "../Components/Todo";

const OpenTodoPage = () => {
  const { todos } = useTodo();
  const openTodos = todos.filter((todo) => !todo.isCompleted);
  return (
    <Container>
      <h1>Open Todo</h1>
      <h2>Total Todo : {openTodos.length}</h2>
      {openTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  );
};

export default OpenTodoPage;
