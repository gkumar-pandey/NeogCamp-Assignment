import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/userProfileapi";

const Q8 = () => {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const url = "https://example.com/api/profile";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setUser(data.profiles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateNameHandler = (name) => {
    setUser((pre) => ({ ...pre, name: name }));
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>
          <strong>Name</strong> : {user.name}
        </p>
        <p>
          <strong>Email</strong> : {user.email}
        </p>
        <p>
          <strong>Age </strong>: {user.age}
        </p>
        <p>
          <strong>Gender</strong> : {user.gender}
        </p>
        <p>
          <strong>Occupation</strong> : {user.occupation}
        </p>
      </div>
      <button onClick={() => updateNameHandler("gautam")}>Update Name</button>
    </div>
  );
};

export default Q8;
