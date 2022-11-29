import React, { useState } from "react";
/*
test
*/
function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = e => {
    setInput(e.target.value)
  }

  
  const addTodo = todo => {
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
        <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
