import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Components/Container";
import fakeFetch from "../Api/api";
import { useTodo } from "../Context/todo-context";
import Todo from "../Components/Todo";

const TodosPage = () => {
  const { todos, setTodos } = useTodo();
  const fetchTodos = async () => {
    const url = "https://example.com/api/todos";

    try {
      const res = await fakeFetch(url);
      if (res.status === 200) {
        setTodos(res.data.todos);
        console.log(res.data.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Container>
      <h1>Todos</h1>
      <nav>
        <NavLink to="/opentodo">Open Todo</NavLink>
        <NavLink to="/donetodo">Done Todo</NavLink>
      </nav>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </Container>
  );
};

export default TodosPage;
