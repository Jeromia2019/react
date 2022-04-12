import React, { useState } from 'react'
import PriorityEnum from '../../enums/PriorityEnum'
import style from './ToDoListProf.module.css'

// Utilisation des librairies "React-Hook-Form" et de "Yup"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// Schema de validation "yup"
const taskSchema = yup.object({
    tname: yup.string().trim().required(),
    tdesc: yup.string().trim(),
    priority: yup.string().required()
}).required();

function ToDoForm(props) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        // Valeur initial du formulaire
        defaultValues: {
            tname: '',
            tdesc: '',
            priority: PriorityEnum.NORMAL
        },
        // Mécanisme pour utiliser "Yup" avec "React Hook Form"
        resolver: yupResolver(taskSchema)
    });

    const onSubmitTask = (data) => {
        // Traitement des données
        props.onValid(data);

        // Reset du formulaire
        reset();
    };

  return (
      <form onSubmit={handleSubmit(onSubmitTask)}>
          <div>
              <label htmlFor="task-name">Nom : </label>
              <input type="text" id='task-name'
              {...register("tname")}
              className={errors.tname ? style.invalidInput : ""}
              />
          </div>
          <div>
              <label htmlFor="task-desc">Description : </label>
              <textarea id='task-desc' 
              {...register("tdesc")}
              />
          </div>
          <div>
              <label htmlFor="task-priority">priorité : </label>
              <select id='task-priority'
              {...register("priority")}
              >
                  <option value={PriorityEnum.NORMAL}>Normale</option>
                  <option value={PriorityEnum.HIGH}>Haute</option>
                  <option value={PriorityEnum.LOW}>Basse</option>
              </select>
          </div>
          <div>
            <button type="submit">{props.buttonSubmit}</button>
          </div>
      </form>
  )
}

ToDoForm.defaultProps = {
    buttonSubmit: 'Enregistrer',
    onValid: () => {} // NOOP
}

export default ToDoForm