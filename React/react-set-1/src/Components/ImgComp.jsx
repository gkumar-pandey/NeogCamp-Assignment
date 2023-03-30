import React from "react";

const ImgComp = ({ imgLink, caption }) => {
  return (
    <div>
      <img src={imgLink} alt={caption} />
      <h3>{caption}</h3>
    </div>
  );
};

export default ImgComp;
