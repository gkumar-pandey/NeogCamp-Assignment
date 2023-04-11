import React from "react";

const HabitComp = ({ title, desc, daysFollowed, daysSkipped, idx }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h3>{title}</h3>
      <p>{desc}</p>

      <p>
        <strong>Days Followed : </strong> <span>{daysFollowed}</span>
      </p>
      <p>
        <strong>Days Skipped : </strong> <span>{daysSkipped}</span>
      </p>
    </div>
  );
};

export default HabitComp;
