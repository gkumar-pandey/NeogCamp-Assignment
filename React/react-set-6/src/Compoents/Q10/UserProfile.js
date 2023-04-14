import React, { useState } from "react";

const UserProfile = ({
  name,
  age,
  gender,
  email,
  occupation,
  followedBy,
  followers,
  updateFollowers
}) => {
  const [isDisable, setIsDisable] = useState(false);
  const coustemStyle = {
    container: {
      margin: "1rem",
      padding: "0.5rem",
      border: "1px solid #eee",
      width: "400px"
    }
  };
  return (
    <div>
      <div style={coustemStyle.container}>
        <h3>{name}</h3>
        <div>
          <p>
            <strong>Age : </strong>
            <span>{age}</span>
          </p>
          <p>
            <strong>Gender : </strong>
            <span>{gender}</span>
          </p>
          <p>
            <strong>Email : </strong>
            <span>{email}</span>
          </p>
          <p>
            <strong>Occupation : </strong>
            <span>{occupation}</span>
          </p>
          <p>
            <strong>Followers : </strong>
            <span>{followers}</span>
          </p>
          <p>
            <strong>Followed By : </strong>
            <span>{followedBy}</span>
          </p>
        </div>
        <button
          disabled={isDisable}
          onClick={() => {
            updateFollowers();
            setIsDisable(true);
          }}
        >
          Follow {name}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
