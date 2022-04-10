import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

function ToDo({todos, completeTodo, removeTodo}) {
    const [tedit, setTedit] = useState({
        id: null,
        value: ''
    })
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.name}
            {todo.description}
        </div>
        <div className='todo-btn'>
            <button
            className='delete-btn'
            onClick={() => removeTodo(todo.id)}
            >Delete</button>
            <button
            className='edit-btn'
            onClick={() => setTedit({id: todo.id, value: todo.name})}
            >Edit</button>
        </div>
    </div>
  ))
}

export default ToDo