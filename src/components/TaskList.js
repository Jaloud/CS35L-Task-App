import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react'
import TaskForm from './TaskForm'

function TaskList() {
    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) { // wont allow whitespace and blank to enter into list
            return
        }

    
    const newTask = {
        id: Math.random(),
        todo: input,
        important: important,
        };
         
        const newTaskList = [task, ...tasks]; // add task to list
        setTask(newTaskList); // set the value to newTask

        setInput('');
    }

    const handleComplete = id => {
        let completedTask = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTask(completedTask)
    }

  return (
    <div>
        <hi>Todo App</hi>
        <TaskForm onSubmit={addTask} 
        
        
        />
    </div>
  )
}

export default TaskList