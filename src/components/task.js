import React, {useState} from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList';

function Task() {
    const [edit, setEdit] = useState({
        index: "",
        txt: "",
      });

  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        </div>

    </div>
  ))
}

export default Task