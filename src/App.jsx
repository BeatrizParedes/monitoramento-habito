import React, { useState, useEffect } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";

const LOCAL_STORAGE_KEY = "habits-react";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedHabits) setHabits(storedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    if (!name) return;
    setHabits([...habits, { name, records: [] }]);
  };

  const toggleHabit = (index) => {
    const today = new Date().toISOString().split("T")[0];
    const newHabits = [...habits];
    const records = newHabits[index].records;
    if (records.includes(today)) {
      newHabits[index].records = records.filter(d => d !== today);
    } else {
      newHabits[index].records.push(today);
    }
    setHabits(newHabits);
  };

  const removeHabit = (index) => {
    const newHabits = [...habits];
    newHabits.splice(index, 1);
    setHabits(newHabits);
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>💡 Monitor de Hábitos</h1>
      <AddHabit addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} removeHabit={removeHabit} />
    </div>
  );
}

export default App;