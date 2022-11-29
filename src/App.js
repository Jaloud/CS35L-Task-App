import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        placeholder="Add a new task"
        onChange={handleChange} // text entered in todo
      />
      <button onClick={() => addTodo(input)}>Add</button>
      {list.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" value={todo.todo} onChange={handleCheck} />
          <span className={isChecked(todo.todo)}>{todo.todo}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
