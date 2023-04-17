import React from "react";

const TodoDetails = ({ title, description, status }) => {
  return (
    <div>
      <h2>Title : {title}</h2>
      <p>
        <b>Description :</b>
        <span>{description}</span>
      </p>
      <p>
        <b>Status : </b>
        <span>{status ? "Done" : "Not Done"}</span>
      </p>
    </div>
  );
};

export default TodoDetails;
