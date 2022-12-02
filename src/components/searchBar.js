import React, { useState, useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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

function SearchBar(input) {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    db.collection("tasks").onSnapshot((snapshot) => {
      setTaskData(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  const taskname = (par) => {
    const data = par.data;
    return data.taskname;
  };
  const getNotes = (par) => {
    const data = par.data;
    return data.notes;
  };

  let sortedTasks = taskData.sort((a, b) => b.important - a.important); // sort the important Tasks and move to top
  const filtered = sortedTasks.filter((entry) => {
    const newInput = input.input.toLowerCase();
    var tsName = taskname(entry);
    tsName = tsName.toLowerCase();
    var ntes = getNotes(entry);
    ntes = ntes.toLowerCase();
    return (tsName.includes(newInput) || 
            ntes.includes(newInput)      
    );
  });
  return (
    <div>
      <ul>
        {filtered.map((item) => (
          <li>{taskname(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
