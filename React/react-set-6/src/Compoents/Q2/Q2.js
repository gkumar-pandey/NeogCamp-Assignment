import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/todoApi";
import TodoComp from "./Components/TodoComp";

const Q2 = () => {
  const [todosData, setTodosData] = useState([]);

  const fetchData = async () => {
    const url = "https://example.com/api/todos";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setTodosData(data.todos);
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
      {todosData.map((todo) => (
        <TodoComp {...todo} />
      ))}
    </div>
  );
};

export default Q2;
