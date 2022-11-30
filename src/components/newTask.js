import React, { useState } from "react";
import addTodo from "../App";

function NewTask(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo(input);
  };

  return (
    <div className="newTask">
      <input
        type="text"
        value={input}
        placeholder="Add a new task"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default NewTask;
