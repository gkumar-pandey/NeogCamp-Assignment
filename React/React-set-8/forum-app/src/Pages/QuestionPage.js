import React from "react";
import { useForum } from "../Context/forum-context";
import QuestionComp from "../Components/QuestionComp";

const QuestionPage = () => {
  const { forumData } = useForum();
  return (
    <div>
      {forumData.map((item) => (
        <QuestionComp key={item.id} {...item} />
      ))}
    </div>
  );
};

export default QuestionPage;
