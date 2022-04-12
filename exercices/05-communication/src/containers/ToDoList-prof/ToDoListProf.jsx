import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
// import ToDoForm from './ToDoFormV2'
// npm i nanoid : Permet de générer des id aléatoires uniques
import {nanoid} from 'nanoid'
import ToDoTask from './ToDoTask';

function ToDoListProf() {

  const [todos, setTodos] = useState([]);

  const handleNewToDo = (data) =>  {
    const newToDo = {
      ...data,
      isComplete: false,
      id: nanoid()
    }
    // on utilise pas .push parce que la méthode renvoie la nouvelle taille du tableau et non son contenu !
    setTodos(oldToDo => [newToDo, ...oldToDo])
  }

  const handleDeletedTask = (id) =>{
    setTodos(tasks => tasks.filter(task => task.id !== id))
  }
  
  const handleCompletedTask = (id) =>{
    setTodos(tasks => tasks.map(task => task.id !== id ? task : {...task, isComplete: true}))
  }

  return (
    <>
        <h2>Ajouter une tâche</h2>
        <ToDoForm buttonSubmit="ajouter" onValid={handleNewToDo}/>
        <h2>Liste des tâches</h2>
        {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
        <ToDoTask elements={todos}
        onDeleteTask={handleDeletedTask}
        onCompleteTask={handleCompletedTask}
        />
    </>
  )
}

export default ToDoListProf