import React, { useEffect, useState } from "react";
import { fakeFetch } from "../../api/commentsApi";
import Comment from "./Components/Comment";

const Comments = () => {
  const [commentData, setCommentData] = useState("");
  const fetchData = async () => {
    const url = "https://example.com/api/comments";
    try {
      const { status, data } = await fakeFetch(url);
      status === 200 && setCommentData(data.comments);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = (name) => {
    const filteredComment = commentData.filter(
      (comment) => comment.name !== name
    );
    setCommentData(filteredComment);
  };

  return (
    <div>
      <h1>Comments</h1>
      {commentData ? (
        commentData.map((item, idx) => (
          <Comment {...item} deleteHandler={deleteHandler} key={idx} />
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Comments;
