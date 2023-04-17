import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTodo } from "../Context/todo-context";

const Todo = ({ id, description, title, isCompleted }) => {
  const location = useLocation();
  const { markAsDoneTodo } = useTodo();

  const styles = {
    container: {
      border: "1px solid #eee",
      borderRadius: "5px",
      padding: "1rem",
      margin: "1rem"
    },
    strike: {
      textDecoration: location.pathname === "/" && isCompleted && "line-through"
    }
  };
  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.strike}>{title}</h2>
        <p style={styles.strike}>{description}</p>
        {location.pathname !== "/" && (
          <>
            <p>Status : {isCompleted ? "Done" : "Not Done"}</p>
          </>
        )}

        <div>
          {location.pathname === "/" ? (
            <button
              onClick={() => {
                markAsDoneTodo(id);
              }}
            >
              Mark as Done
            </button>
          ) : (
            <>
              <Link to={`/todo/${id}`}>Expand Todo</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
