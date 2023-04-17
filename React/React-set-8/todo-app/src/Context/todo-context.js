import { createContext, useContext, useState } from "react";

export const todoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const markAsDoneTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id == todoId ? { ...todo, isCompleted: true } : { ...todo }
    );
    setTodos(updatedTodos);
  };

  return (
    <todoContext.Provider value={{ todos, setTodos, markAsDoneTodo }}>
      {children}
    </todoContext.Provider>
  );
};

export const useTodo = () => useContext(todoContext);
