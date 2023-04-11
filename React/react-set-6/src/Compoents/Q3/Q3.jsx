import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/habittrackerapi";
import HabitComp from "./Components/HabitComp";

const Q3 = () => {
  const [habitData, setHabitData] = useState([]);

  const fetchData = async () => {
    const url = "https://example.com/api/habits";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setHabitData(data.habits);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Habit Tracker</h2>
      <div style={{ padding: "0.5rem" }}>
        <ul>
          {habitData.map((item, idx) => (
            <li style={{ margin: "1rem" }}>
              <HabitComp {...item} key={idx} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Q3;
