import React, { useState } from "react";
import TaskForm from "./TaskForm";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore, connectFirestoreEmulator } from 'firebase/firestore/lite';
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
  measurementId: "G-6E45S5H59J"

};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function Task({
  completeTask,
  removeTask,
  editTask,
  importantTask,
  sortedTasks,
}) {

  const [updatedTaskName, setupdatedTaskName] = useState("");
  const [dataIdT, setDataId] = useState("");



  const handleEdit =(event) =>{
    console.log("editing mode")
    (editTask(event.id))
  //   event.preventDefault();
  //   db.collection("tasks").doc(dataIdT).update({
  //     taskname: updatedTaskName,
  //   }); 
  // setupdatedTaskName("");
  // setDataId("");
  }



  const taskname = (par) =>{
    const data = par.data
    return data.taskname
  }
  const iscompleted = (par) =>{
    const data = par.data
    return data.checked
  }
  const isImporant = (par) =>{
    const data = par.data
    return data.important
  }
  

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
          { taskname(todo)}
        </div>
      </div>
      <div className="deadline">
        <label className="deadline-button">set deadline:</label>
        <input
          className="deadline-date"
          type="text"
          placeholder="date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
      </div>
      <div className="task-buttons">
        <div>
          <button
            className="edit-task"
            onClick={() => handleEdit()}
          >
            edit
          </button>
        </div>
      </div>
      <div>
        <textarea
          className="task-notes"
          name="taskNotes"
          placeholder="notes"
          wrap="hard"
        />
      </div>
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
  ));
}

export default Task;
