import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/usersDataApi";
import UserCard from "./UserCard";

const UserFeed = () => {
  const [usersData, setUsersData] = useState("");
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    const url = "https://example.com/api/users";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setUsersData(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Feed</h1>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {usersData ? (
            usersData.map((user) => (
              <UserCard user={user} height={200} width={200} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserFeed;
