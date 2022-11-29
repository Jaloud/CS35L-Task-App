import React, { useEffect, useState } from "react";
import Header from "./components/header.js";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [important, setImportant] = useState(false);
  const [edit, setEdit] = useState({
    index: "",
    txt: "",
  });

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
  };

  const isChecked = (item, id) =>
    checked.includes(item, id) ? "checked-item" : "not-checked-item";

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random(),
      todo: input,
      important: important,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const editIndex = (e) => {
    setEdit({ ...edit, index: e });
  };

  const editTodo = () => {
    list.splice(edit.index, 1, { ...list[edit.index], todo: edit.txt });
    setList([...list]);
    setEdit({ index: "", txt: "" });
    console.log(list);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);
  useEffect(() => {
    console.log(edit);
  }, [edit]);

  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <form onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          required
          value={input}
          placeholder="Add a new task"
          onChange={(e) => setInput(e.target.value)} // text entered in todo
        />
        Important:{" "}
        <input
          type="checkbox"
          name="important"
          checked={important}
          onChange={() => setImportant(important === true ? false : true)}
        />
      </form>
      <div className="tasks">
        {list.map((todo, ind) => (
          <div key={ind}>
            {edit.index === ind ? (
              <>
                <input
                  type="text"
                  placeholder="enter text"
                  value={edit.txt}
                  onChange={(e) => setEdit({ ...edit, txt: e.target.value })}
                />
                <button onClick={editTodo}>edit</button>
              </>
            ) : (
              <div
                key={todo.id}
                style={{ backgroundColor: todo.important ? "red" : "white" }}
              >
                <br />
                <input
                  type="checkbox"
                  value={todo.todo}
                  onChange={handleCheck}
                />
                <span className={isChecked(todo.todo)}>{todo.todo + "\t"}</span>
                <label className="task" htmlFor="date">
                  (set deadline):{" "}
                </label>
                <input
                  type="date"
                  onChange={(event) => ({ startDate: event.target.value })}
                />
                <button onClick={() => handleDelete(todo.id)}>x</button>
                <br />
                <input size="15" type="text" placeholder="notes" />
                <br />
                <button onClick={() => editIndex(ind)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
=======
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
>>>>>>> 853a457c (fixed checkbox bug)
    </div>
  );
}

export default App;