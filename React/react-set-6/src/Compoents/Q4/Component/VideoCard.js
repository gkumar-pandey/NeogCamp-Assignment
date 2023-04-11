import React from "react";

const VideoCard = ({ title, thumbnail, views, likes }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <div>
        <img src={thumbnail} alt="" />
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div>
        <p>Views: {views}</p>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default VideoCard;
