import React from "react";
import Container from "../Components/Container";
import Todo from "../Components/Todo";
import { useTodo } from "../Context/todo-context";

const DoneTodoPage = () => {
  const { todos } = useTodo();
  const doneTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <Container>
      <h1>Done Todos</h1>
      <h2>Total Todos : {doneTodos.length}</h2>
      <div>
        {doneTodos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </Container>
  );
};

export default DoneTodoPage;
