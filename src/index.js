import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";

class NewList extends React.Component {
  renderNewPage() {
    console.log("new");
  }

  render() {
    return <button onClick={this.renderNewPage}>Create New List</button>; //need to change onClick handler, currently for testing
  }
}

class EditList extends React.Component {
  renderNewPage() {
    console.log("edit");
  }

  render() {
    return (
      <button onClick={this.renderNewPage}>Edit Existing List</button> //need to change onClick handler, currently for testing
    );
  }
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
          <NewList />
        </dt>
        <br></br>
        <dt>
          <EditList />
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
