import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/userApi";

const UserStatus = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const url = "https://example.com/api/users/status";

    try {
      const res = await fakeFetch(url);
      if (res.status) {
        setUsers(res.data.users);
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
      <h2>Online Users</h2>
      {users.map(({ name, status }, idx) => {
        return (
          <div key={idx}>
            <p style={{ color: status === "Online" ? "green" : "red" }}>
              {name}-{status}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserStatus;
