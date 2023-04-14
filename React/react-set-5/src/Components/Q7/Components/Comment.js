import React from "react";

const Comment = ({ name, text, deleteHandler, key }) => {
  return (
    <div key={key}>
      <h3>{name}</h3>
      <p>{text}</p>
      <button onClick={() => deleteHandler(name)}>Delete</button>
    </div>
  );
};

export default Comment;
