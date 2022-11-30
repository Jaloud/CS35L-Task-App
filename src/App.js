import React from "react";
import Header from "./components/header.js";
import TaskList from "./components/TaskList.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="tasks">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
