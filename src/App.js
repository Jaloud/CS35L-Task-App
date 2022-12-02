import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header.js";
import TaskList from "./components/TaskList.js";
import SearchBar from "./components/searchBar.js";
import "./index.css";

function App() {
  
  const [inputText, setInputText] = useState("");

  const handleChange2 = (event) => {
    setInputText(event.target.value); // set e to text entered
  };
  
  const focus = useRef(null);
  
  useEffect(() => {
    focus.current.focus();
  });

  return (
    <div className="App">
      <Header />
      <div className="tasks">
        <TaskList />
    <h1 className="searbarHeader">Search</h1>
      <div className="s-form">
        <input class="s-input"
          type="text"
          value={inputText}
          onChange={handleChange2}
          ref={focus}
        />
      </div>
      <SearchBar input={inputText} />
      </div>

    </div>
  );
}

export default App;
