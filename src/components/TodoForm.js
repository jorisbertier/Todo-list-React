import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('') // récupèrer valeur que écrit l'utilisateur

    const [submit, setSubmit] = useState('') // récupérer valeur écrite par l'user lors du click

    // const handleChange = (e)=>  {
    //     setValue(e.target.value)
    // }
    const handleSubmit = e => {
        e.preventDefault();
        // setSubmit(value)
        addTodo(value)

        setValue('')
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value={value} className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add task</button>
        <div>{submit}</div>
    </form>
    
  )
}
