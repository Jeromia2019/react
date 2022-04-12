import React from 'react'
import PriorityEnum from '../../enums/PriorityEnum';
import style from './ToDoListProf.module.css'

function ToDoItem(props) {

    const {id, name, desc, priority, isComplete} = props;
    const {onComplete, onDelete} = props;
    const isUrgent = (priority === PriorityEnum.HIGH)

  return (
      <li className={isComplete ? style.isComplete : style.task}>
          <div>
            <h3>{name} {isUrgent && <span className={style.urgent}>(Urgent)</span>}</h3>
            <p>{desc}</p>
          </div>
          <div>
            <button onClick={() => onComplete(id)} disabled={isComplete}>Terminer</button>
            <button onClick={() => onDelete(id)} >Supprimer</button>
          </div>
      </li>
  )
}

export default ToDoItem