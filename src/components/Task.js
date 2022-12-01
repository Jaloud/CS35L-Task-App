import React, { useState } from "react";
import TaskForm from "./TaskForm";

function Task({
  completeTask,
  removeTask,
  editTask,
  importantTask,
  sortedTasks,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const changeTask = (newTask) => {
    editTask(edit.id, newTask);
  
  };
  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={changeTask} />;
  }

  return sortedTasks.map((todo, index) => (
    <div>
      <div
        className={todo.isComplete ? "todo-row-complete" : "todo-row"}
        key={index}
        style={todo.important ? { background: "orange" } : {}}
      >
        <div
          className="task-name"
          key={todo.id}
          onClick={() => completeTask(todo.id)}
        >
          {todo.task}
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
            onClick={() => setEdit({ id: todo.id, value: todo.task })}
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
        onClick={() => importantTask(todo.id)}
      >
        !!!
      </button>
    </div>
  ));
}

export default Task;
