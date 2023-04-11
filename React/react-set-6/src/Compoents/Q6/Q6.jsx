import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/habitapi";
import HabitComp from "../Q3/Components/HabitComp";

const Q6 = () => {
  const [habitData, setHabitData] = useState();
  const [habits, setHabits] = useState({
    title: "",
    habit: []
  });

  const fetchData = async () => {
    const url = "https://example.com/api/habits";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setHabitData(data.habits);
        const unarchiveHabits = data.habits.filter(({ archive }) => !archive);
        setHabits({ title: "Unarchive", habit: unarchiveHabits });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showArchiveHandler = () => {
    const filterHabit = habitData.filter(({ archived }) => archived);
    setHabits({ title: "Archive", habit: [...filterHabit] });
  };
  return (
    <div>
      {habitData ? (
        <>
          <h2>{habits.title}</h2>
          {habits.habit.map((habit, idx) => (
            <HabitComp {...habit} key={idx} />
          ))}
        </>
      ) : (
        <div>
          <h2>Loading...</h2>
        </div>
      )}

      <button onClick={showArchiveHandler}>Show Archive</button>
    </div>
  );
};

export default Q6;
