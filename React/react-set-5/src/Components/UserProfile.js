import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/userProfileApi";
import UserCard from "./UserCard";

const UserProfile = ({ heading, height, width }) => {
  const [userData, setUserData] = useState("");

  const fetchData = async () => {
    const url = "https://example.com/api/user";
    try {
      const res = await fakeFetch(url);
      if (res.status == 200) {
        setUserData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      {userData ? (
        <UserCard user={userData} height={height} width={width} />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProfile;
