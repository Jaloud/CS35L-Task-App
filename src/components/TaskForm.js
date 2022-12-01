import React, { useState, useEffect, useRef } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
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

function TaskForm(props) {
  const [input, setInput] = useState("");
  
  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value); // set e to text entered
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // doesnt refresh the page when pressing button

    db.collection("tasks").add({
      taskname: input,
      id: Math.random(), // give task a random id
      important: false,

    });

    setInput("");
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={focus}
        />
        <br />
        <button className="todo-button" type="Submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
