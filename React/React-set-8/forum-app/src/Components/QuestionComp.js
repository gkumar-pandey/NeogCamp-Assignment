import React from "react";
import { Link } from "react-router-dom";

const QuestionComp = ({ question, answer, id }) => {
  return (
    <div>
      <div>
        <h2>{question}</h2>
        <div style={{ display: "flex" }}>
          <p style={{ margin: "4px 10px" }}>
            <Link>upvote</Link>
          </p>
          <p style={{ margin: "4px 10px" }}>
            <Link>downvote</Link>
          </p>
          <p style={{ margin: "4px 10px" }}>
            <Link to={`/answer/${id}`}>answer</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionComp;
