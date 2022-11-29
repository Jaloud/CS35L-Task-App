import React, { useEffect, useState }from "react";
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

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleDelete = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

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
      <h1>Todo App</h1>
      <form onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
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
              <input type="checkbox" value={todo.todo} onChange={handleCheck} />
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
  );
}

export default App;
