import React, { useState, useEffect, useRef } from "react";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value); // set e to text entered
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // doesnt refresh the page when pressing button

    props.onSubmit({
      id: Math.random(), // give task a random id
      task: input,
      important: false,
    });

    setInput("");
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={focus}
        />
        <br />
        <button className="todo-button" type="Submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
