import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForum } from "../Context/forum-context";
import fakeFetch from "../api/api";

const Homepage = () => {
  const { setForumData } = useForum();

  const fetchData = async () => {
    const url = "https://example.com/api/questions";
    try {
      const res = await fakeFetch(url);
      if (res.status === 200) {
        setForumData(res.data.questions);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h1>Welcome John</h1>
      <Link to={"/question"}>Show QuestionList</Link>
    </div>
  );
};

export default Homepage;
