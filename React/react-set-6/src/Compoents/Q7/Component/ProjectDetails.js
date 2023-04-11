import React from "react";

const ProjectDetails = ({ title, description, completed, technologies }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <p>
        <strong>Title : </strong> {title}
      </p>
      <p>
        <strong>Description : </strong>
        {description}
      </p>
      <p>
        <strong>Technologies : </strong>
        {technologies.map((tech) => (
          <span>{tech}, </span>
        ))}
      </p>
      <p>
        <strong>Completed : </strong>
        {completed ? "true" : "false"}
      </p>
    </div>
  );
};

export default ProjectDetails;
