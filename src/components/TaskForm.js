import React, {useState} from 'react'

function TaskForm(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
      setInput(e.target.value); // set e to text entered 
    }

    const handleSubmit = e => {
      e.preventDefault(); // doesnt refresh the page when pressing button

      // props.onSubmit({
      //   id: Math.random(), // give task a random id
      //   text: input
      // })

      // setInput('');
    };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className='todo-input'
        onChange={handleChange}
    />
    <button className='todo-button'>Add</button>
  </form>
  )
}

export default TaskForm