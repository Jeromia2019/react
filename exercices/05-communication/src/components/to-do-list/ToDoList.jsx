import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        // cannot enter empty name or description
        if (!todo.name || /^\s*$/.test(todo.name)) {
            return;
        } 
        else if (!todo.description || /^\s*$/.test(todo.description)) {
            return;
        }

        const newTodo = [todo, ...todos];
        setTodos(newTodo);
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodo)
    }
    return(
        <>
        <h1>Ajouter une nouvelle tâche</h1>
        <ToDoForm onSubmit={addTodo}/>
        <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
        </>
    )
}

export default ToDoList;