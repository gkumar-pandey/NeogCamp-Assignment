import React from "react";

const UserCard = ({ user, height, width }) => {
  return (
    <div>
      <div>
        <img
          src={user.image}
          alt={user.name}
          style={{ height: `${height}px`, width: `${width}px` }}
        />
        <div>
          <p>Name: {user.name}</p>
          <p>Likes : {user.likes}</p>
          <p>Comments: {user.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
