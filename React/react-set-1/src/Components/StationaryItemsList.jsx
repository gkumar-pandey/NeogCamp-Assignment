import React from "react";

const StationaryItemsList = ({ header, items }) => {
  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StationaryItemsList;
