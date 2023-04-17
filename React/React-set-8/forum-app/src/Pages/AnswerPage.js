import React from "react";
import { useParams } from "react-router-dom";
import { useForum } from "../Context/forum-context";

const AnswerPage = () => {
  const { ansId } = useParams();
  const { forumData } = useForum();
  const { question, answer } = forumData.find((item) => item.id === +ansId);
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default AnswerPage;
