import React from "react";

const VideoCard = ({ thumbnail, title, likes, views, label }) => {
  return (
    <div>
      <div>
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
      </div>
      <div>
        <p>
          <strong>Views: </strong>
          <span>{views}</span>
        </p>
        <p>
          <strong>Likes: </strong>
          <span>{likes}</span>
        </p>
        {label && (
          <p>
            <strong>Label: </strong>
            <span>{label}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
