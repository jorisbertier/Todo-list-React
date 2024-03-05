import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task) // récupèrer valeur que écrit l'utilisateur

    const handleSubmit = e => {
        e.preventDefault();
        // setSubmit(value)
        editTodo(value, task.id)

        setValue('')
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value={value} className='todo-input' placeholder='Update task' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update task</button>
    </form>
    
  )
}
