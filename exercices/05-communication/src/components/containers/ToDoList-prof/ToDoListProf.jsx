import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
// npm i nanoid : Permet de générer des id aléatoires uniques
import {nanoid} from 'nanoid'

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

  return (
    <>
        <h2>Ajouter une tâche</h2>
        <ToDoForm buttonSubmit="ajouter" onValid={handleNewToDo}/>
        <h2>Liste des tâches</h2>
        <pre>{JSON.stringify(todos, null, 4)}</pre>
    </>
  )
}

export default ToDoListProf