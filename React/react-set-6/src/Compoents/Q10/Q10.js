import React, { useEffect, useState } from "react";
import fakeFetch from "./api";
import UserProfile from "./UserProfile";
const Q10 = () => {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const url = "https://example.com/api/profile";
    try {
      const { status, data } = await fakeFetch(url);
      if (status == 200) {
        setUser(data.profile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateFollowers = () => {
    setUser((pre) => ({ ...pre, followers: user.followers + 1 }));
  };

  return (
    <div>
      <UserProfile {...user} updateFollowers={updateFollowers} />
    </div>
  );
};

export default Q10;
