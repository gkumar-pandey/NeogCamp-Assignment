import React from "react";

const TodoComp = ({ title, todos }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <ol>
          {todos.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoComp;
