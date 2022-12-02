import React, { useState } from "react";
import TaskForm from "./TaskForm";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  connectFirestoreEmulator,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhLLd4MOWrS9xXVjp_GGhZ6TCKEVOUhpk",
  authDomain: "cs35l-task-app.firebaseapp.com",
  projectId: "cs35l-task-app",
  storageBucket: "cs35l-task-app.appspot.com",
  messagingSenderId: "875742275629",
  appId: "1:875742275629:web:de8cc453b17201e7d070a4",
  measurementId: "G-6E45S5H59J",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function Task({
  completeTask,
  removeTask,
  editTask,
  importantTask,
  // handleNotes,
  sortedTasks,
}) {
  const [input, setInput] = useState([]);
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState([]);

  const handleEdit = (e, todo) => {
    e.preventDefault(); // doesnt refresh the page when pressing button
    console.log("editing mode");
    console.log(input);
    console.log(todo.id);
    db.collection("tasks").doc(todo.id).update({
      taskname: input,
    });
  };

  const handleNotes = (e, todo) => {
    e.preventDefault(); // doesnt refresh the page when pressing button
    console.log("editing mode");
    console.log(notes);
    console.log(todo.id);
    db.collection("tasks").doc(todo.id).update({
      notes: notes,
    });
  };

  const handleDeadlines = (e, todo) => {
    e.preventDefault(); // doesnt refresh the page when pressing button
    console.log("editing mode");
    console.log(date);
    console.log(todo.id);
    db.collection("tasks").doc(todo.id).update({
      date: date,
    });
  };

  const taskname = (par) => {
    const data = par.data;
    return data.taskname;
  };
  const iscompleted = (par) => {
    const data = par.data;
    return data.checked;
  };
  const isImporant = (par) => {
    const data = par.data;
    return data.important;
  };
  const getNotes = (par) => {
    const data = par.data;
    return data.notes;
  };
  const getdeadline = (par) => {
    const data = par.data;
    return data.date;
  };

  const handleChange = (event) => {
    setInput(event.target.value); // set e to text entered
  };
  const handleNotesChange = (event) => {
    setNotes(event.target.value); // set e to text entered
  };

  const handleDeadlineChange = (event) => {
    setDate(event.target.value);
  };

  // const handleNotes = (id, notesField) => {
  //   // event.preventDefault
  //   console.log(id, ":", notesField)
  //   db.collection("tasks").doc(id).update({
  //     notes: "New Notes field",
  // });
  // }

  return sortedTasks.map((todo, index) => (
    <div>
      <div
        className={iscompleted(todo) ? "todo-row-complete" : "todo-row"}
        key={index}
        style={isImporant(todo) ? { background: "orange" } : {}}
      >
        <div
          className="task-name"
          key={todo.id}
          onClick={() => completeTask(todo.id, iscompleted(todo))}
        >
          {taskname(todo)}
        </div>
      </div>
      <div className="deadline">
        <form autoComplete="off">
          <button
            className="deadline-button"
            onClick={(e) => handleDeadlines(e, todo)}
          >
            set deadline
          </button>
          <input
            className="deadline-date"
            type="text"
            placeholder={getdeadline(todo)}
            value={date.id}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={handleDeadlineChange}
          />
        </form>
      </div>
      <div className="task-buttons">
        <div>
          <form autoComplete="off">
            <input
              type="text"
              value={input.id}
              name="text"
              className="textarea-input"
              onChange={handleChange}
            />
            <button className="edit-task" onClick={(e) => handleEdit(e, todo)}>
              edit
            </button>
          </form>
        </div>
        <div className="textArea">
          <form autoComplete="off">
            <input
              type="text"
              placeholder={getNotes(todo)}
              value={notes.id}
              onFocus={(e) => (e.target.value = getNotes(todo))}
              name="text"
              className="textarea-input"
              onChange={handleNotesChange}
            />
            <button className="edit-task" onClick={(e) => handleNotes(e, todo)}>
              add notes
            </button>
          </form>
        </div>
      </div>
      <div className="delete-priority-buttons">
        <button className="remove-task" onClick={() => removeTask(todo.id)}>
          DELETE
        </button>
        <button
          className="priority-button"
          onClick={() => importantTask(todo.id, isImporant(todo))}
        >
          !!!
        </button>
      </div>
    </div>
  ));
}

export default Task;
