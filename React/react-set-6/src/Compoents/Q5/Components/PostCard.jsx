import React from "react";

const PostCard = ({ src, caption, views, likes, category }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <div>
        <img src={src} alt="" />
        <div>
          <strong>{caption}</strong>
        </div>
        <div>
          <strong>Likes : </strong>
          <span>{likes}</span>
        </div>
        <div>
          <strong>Views:</strong>
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
