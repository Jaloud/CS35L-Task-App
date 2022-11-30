import React, { useState } from "react";
import TaskForm from "./TaskForm";

function Task({ tasks, completeTask, removeTask, editTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const changeTask = (newTask) => {
    editTask(edit.id, newTask);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={changeTask} />;
  }

  return tasks.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row-complete" : "todo-row"}
      key={index}
    >
      <div
        className="task-name"
        key={todo.id}
        onClick={() => completeTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="icons">
        <button className="remove-task" onClick={() => removeTask(todo.id)}>
          x
        </button>
        <button
          className="edit-task"
          onClick={() => setEdit({ id: todo.id, value: todo.task })}
        >
          edit
        </button>
      </div>
    </div>
  ));
  // <li>
  //   <label>
  //     <Checked value={value} />
  //   </label>
  // </li>
  //   const [edit, setEdit] = useState({
  //     index: "",
  //     txt: "",
  //   });
  //   return tasks.map((task, index) => (
  //     <div
  //       className={task.isComplete ? "todo-row complete" : "todo-row"}
  //       key={index}
  //     >
  //       <div key={todo.id} onClick={() => completeTodo(todo.id)}></div>
  //     </div>
  //   ));
}

export default Task;
