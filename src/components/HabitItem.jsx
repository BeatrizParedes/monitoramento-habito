import React from "react";

function HabitItem({ habit, index, toggleHabit, removeHabit }) {
  const today = new Date().toISOString().split("T")[0];
  const isDone = habit.records.includes(today);

  const progress = habit.records.length > 0 ? Math.min((habit.records.length / 30) * 100, 100) : 0;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
      <h3 style={{ margin: 0 }}>{habit.name}</h3>
      <div style={{ margin: "5px 0" }}>
        <div style={{ background: "#eee", height: "10px", borderRadius: "5px" }}>
          <div style={{ width: `${progress}%`, background: "#5d2e71", height: "100%", borderRadius: "5px" }}></div>
        </div>
        <small>{progress.toFixed(0)}% concluído</small>
      </div>
      <button onClick={() => toggleHabit(index)} style={{ marginRight: "10px", padding: "5px 10px" }}>
        {isDone ? "✅ Cumpri hoje" : "⏳ Marcar hoje"}
      </button>
      <button onClick={() => removeHabit(index)} style={{ padding: "5px 10px", background: "#e25300", color: "#fff", border: "none", borderRadius: "4px" }}>
        ❌ Remover
      </button>
    </div>
  );
}

export default HabitItem;