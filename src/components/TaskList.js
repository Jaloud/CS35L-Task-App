import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  //const [important, setImportant] = useState(false);

  const addTask = (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      // wont allow whitespace and blank to enter into list
      return;
    }

    const newTasks = [todo, ...tasks]; // add task to list
    setTasks(newTasks); // set the value to newTask
  };

  const removeTask = (id) => {
    const removedTasks = [...tasks].filter((todo) => todo.id !== id);

    setTasks(removedTasks);
  };

  const editTask = (id, newTask) => {
    if (!newTask.task || /^\s*$/.test(newTask.task)) {
      // wont allow whitespace and blank to enter into list
      return;
    }

    setTasks((old) => old.map((value) => (value.id === id ? newTask : value)));
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

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      <Task
        tasks={tasks}
        completeTask={handleComplete}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default TaskList;
