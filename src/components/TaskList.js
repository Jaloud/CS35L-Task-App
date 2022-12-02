import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

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

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState([]);

  const removeTask = (id) => {
    db.collection("tasks").doc(id).delete();
  };

  const editTask = (id, newTask) => {
    newTask.preventDefault();
    db.collection("tasks").doc(id).update({
      taskname: newTask,
    });
  };

  const handleComplete = (id, nextStatus) => {
    db.collection("tasks").doc(id).update({
      checked: !nextStatus,
    });
  };

  const handleImpTask = (id, nextStatus) => {
    db.collection("tasks").doc(id).update({
      important: !nextStatus,
    });
  };
  const handleNotes = (id, notesField) => {
    console.log(id, ":", notesField);
    db.collection("tasks").doc(id).update({
      notes: notesField,
    });
  };

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

  const isImporant = (par) => {
    const data = par.data;
    return data.important;
  };
  const iscompleted = (par) => {
    const data = par.data;
    return data.checked;
  };

  let sortedTasks = taskData.sort((a, b) => (isImporant(b) - isImporant(a) || iscompleted(a) - iscompleted(b) )); // sort the important Tasks and move to top
  // console.log(sortedTasks)
  return (
    <div>
      <TaskForm tasks={tasks} />
      <Task
        completeTask={handleComplete}
        removeTask={removeTask}
        editTask={editTask}
        importantTask={handleImpTask}
        handleNotes={handleNotes}
        sortedTasks={sortedTasks}
      />
    </div>
  );
}

export default TaskList;
