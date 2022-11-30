import React, { useEffect, useState } from "react";
import Header from "./components/header.js";
import TaskList from "./components/TaskList.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
