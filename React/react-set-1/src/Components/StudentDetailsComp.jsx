import React from "react";

const StudentDetailsComp = ({
  student: { name, english, maths, computers }
}) => {
  const totalMarks = english + maths + computers;

  const grade =
    totalMarks >= 225
      ? "A"
      : totalMarks >= 180
      ? "B"
      : totalMarks >= 150
      ? "C"
      : "D";

  return (
    <div>
      <h2>Student Details</h2>
      <div>
        <p>Name: {name}</p>
        <p>English:{english}</p>
        <p>Maths: {maths}</p>
        <p>Computers: {computers}</p>
        <p>Grade : {grade}</p>
      </div>
    </div>
  );
};

export default StudentDetailsComp;
