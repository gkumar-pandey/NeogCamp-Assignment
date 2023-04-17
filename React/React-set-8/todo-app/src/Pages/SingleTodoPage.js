import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import { useTodo } from "../Context/todo-context";
import TodoDetails from "../Components/TodoDetails";

const SingleTodoPage = () => {
  const { todoId } = useParams();
  const { todos } = useTodo();

  const singleTodo = todos.find((todo) => todo.id === Number(todoId));

  return (
    <Container>
      <div>
        <h1>Todo Description</h1>
      </div>
      <TodoDetails {...singleTodo} />
    </Container>
  );
};

export default SingleTodoPage;
