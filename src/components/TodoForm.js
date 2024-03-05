import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type='text' clasName='todo-input' placeholder='Quel est la tâche du jour'></input>
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}
