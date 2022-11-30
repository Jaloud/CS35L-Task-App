import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    var updatedList = [...checked];
    if (id.target.checked) {
      updatedList = [...checked, id.target.value];
      id.target.style.setProperty('text-decoration', 'line-through');
    } else {
      updatedList.splice(checked.indexOf(id.target.value), 1);
      id.target.style.removeProperty('text-decoration');
    }
    setChecked(updatedList);
  };
  
  const handleDelete = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  const isChecked = (item, id) =>
    checked.includes(item, id) ? "checked-item" : "not-checked-item";

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
          <br />
          <input type="checkbox" value={todo.id} onChange={handleCheck} />
          <span className={isChecked(todo.todo, todo.id)}>{todo.todo + "\t"}</span>
          <label className="task" for="date">
            (set deadline):{" "}
          </label>
          <input
            type="date"
            onChange={(event) =>({ startDate: event.target.value })}
          />
          <button onClick={() => handleDelete(todo.id)}>x</button>
          <br />
          <input size="15" 
          type="text" 
          placeholder="notes" />
        </div>
      ))}
    </div>
  );
}

export default App;