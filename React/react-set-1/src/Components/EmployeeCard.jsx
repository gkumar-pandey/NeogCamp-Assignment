import React from "react";

const EmployeeCard = ({ name, designation, experience }) => {
  return (
    <div>
      <h3>Employee Detail</h3>
      <div>
        <p style={{ fontSize: "20px" }}>Name : {name} </p>
        <p style={{ fontSize: "20px" }}>
          <span style={{ color: "green" }}>Designation</span> : {designation}
        </p>
        <p style={{ fontSize: "20px" }}>
          <span style={{ color: "blue" }}>Experience</span>: {experience}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
