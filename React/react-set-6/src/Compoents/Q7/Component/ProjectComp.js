import React from "react";

const ProjectComp = ({
  title,
  description,
  completed,
  technologies,
  showProjectDetails
}) => {
  return (
    <div style={{ margin: "1rem" }}>
      <p>
        <strong>Name : </strong>
        {title}
      </p>
      <p>
        <strong>Description : </strong>
        {description}
      </p>
      <button
        onClick={() =>
          showProjectDetails({ title, description, completed, technologies })
        }
      >
        Show Details
      </button>
    </div>
  );
};

export default ProjectComp;
