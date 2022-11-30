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
      <div className="task-buttons">
        <div className="edit-task">
          <button onClick={() => setEdit({ id: todo.id, value: todo.task })}>
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
    </div>
  ));
}

export default Task;
