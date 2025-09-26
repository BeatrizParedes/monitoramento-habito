import React from "react";
import HabitItem from "./HabitItem";

function HabitList({ habits, toggleHabit, removeHabit }) {
  if (habits.length === 0) return <p>Nenhum hábito cadastrado. Adicione um acima! 💡</p>;
  return (
    <div>
      {habits.map((habit, index) => (
        <HabitItem key={index} habit={habit} index={index} toggleHabit={toggleHabit} removeHabit={removeHabit} />
      ))}
    </div>
  );
}

export default HabitList;