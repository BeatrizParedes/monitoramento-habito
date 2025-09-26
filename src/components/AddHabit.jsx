import React, { useState } from "react";

function AddHabit({ addHabit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={name}
        placeholder="Novo hábito..."
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", width: "60%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>➕</button>
    </form>
  );
}

export default AddHabit;