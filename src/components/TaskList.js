import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";



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

// const getTasks = async (list) => {
//   const tasksCol = collection(fireDatabase, 'tasks');p
//   const tasksdocs = await getDocs(tasksCol)
//   let counter = 0;
//   tasksdocs.forEach(doc => {
//     console.log(list[counter].task)
//     list[counter].task = doc.get("taskName")
//     counter = counter +1;
//     console.log(doc.id, '=>', doc.get("taskName"));
//   });
  
//   return tasksdocs
// }



function TaskList() {
  const [tasks, setTasks] = useState([]);


  const addTask = (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      // wont allow whitespace and blank to enter into list
      return;
    }

    const newTasks = [todo, ...tasks]; // add task to list
    setTasks(newTasks); // set the value to newTask
  };

  const removeTask = (id) => {
    db.collection("tasks").doc(id).delete();
  };

  const editTask = (id, newTask) => {
    newTask.preventDefault();
    db.collection("tasks").doc(id).update({
        taskname: newTask,
    });
  };

  const handleComplete = (id) => {
    let completedTask = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });

    setTasks(completedTask);
  };

  const handleImpTask = id => {
    let importantTask = tasks.map((task) => {
      if(task.id === id) {
        task.important = !task.important
      }
      return task;
    })

    setTasks(importantTask);
  }


  useEffect(() => {
    db.collection("tasks").onSnapshot((snapshot) => {
      let docData
      snapshot.docs.map((doc) => (
        console.log(doc.id),
        docData = doc.data(),
        console.log(docData.taskname)
      ));

    setTasks(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      important: docData.important,
      task: docData.taskname,
      }))
    );
    });
    // console.log({ tasks });
  }, []);

  let sortedTasks = tasks.sort((a,b) => b.important - a.important) // sort the important Tasks and move to top

  return (
    <div>
      <TaskForm 
      onSubmit={addTask}
      tasks={tasks} 
      />
      <Task
        tasks={tasks}
        completeTask={handleComplete}
        removeTask={removeTask}
        editTask={editTask}
        importantTask={handleImpTask}
        sortedTasks={sortedTasks}
      />
    </div>
  );
}

export default TaskList;