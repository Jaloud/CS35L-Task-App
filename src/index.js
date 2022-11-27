import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";

function NewList(name) {
  return <button onClick={() => console.log("new")}>{name.value}</button>; //need to change onClick handler, currently for testing
}

function EditList(name) {
  return <button onClick={() => console.log("edit")}>{name.value}</button>; //need to change onClick handler, currently for testing
}

class Application extends React.Component {
  /*
      Renders in all the options when you first open the application
      They are rendered in as buttons and named in this function
  */
  renderOptions() {
    return (
      <dl>
        <dt>
          <NewList value="Create New List" />
        </dt>
        <br></br>
        <dt>
          <EditList value="Edit Existing List" />
        </dt>
      </dl>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <div className="Options">
          {this.renderOptions()}
          {}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
