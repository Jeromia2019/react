import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';

const userSchema = yup.object({
    firstname: yup.string().trim().required().min(2),
    lastname: yup.string().trim().required().min(2),
}).required();


function UserForm() {
  const dispatch = useDispatch();
  
  const { register, handleSubmit, reset, formState: { errors }, setFocus } = useForm({
    resolver: yupResolver(userSchema),
    // vérifie la validité de yup sur le submit et pas sur le focus aussi
    reValidateMode: 'onSubmit'
  })

  const onSubmit = (data) => {
    dispatch({type: 'user/add', payload: data})
    setFocus('firstname')
    // isValid ne marchera jamais puisqu'on reset les données (le isValid ne prends en compte que les données reçues, pas la validité de celles-ci (vu que si elles passent, elles sont valides))
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="firstname" id="firstname" 
        {...register('firstname')}
        placeholder='Prénom'
        />
        <input type="text" name="lastname" id="lastname" 
        {...register('lastname')}
        placeholder='Nom'
        />
        <button type="submit">Envoyer</button>
        <div>{Object.keys(errors).length !== 0 && <span>Erreur !</span>}</div>
        {/* <div>{(errors.firstname || errors.lastname) && <span>Erreur !</span>}</div> */}
        {/* plus précis mais contraignant si on doit renseigner chaque champs de errors*/}
    </form>
  )
}

export default UserForm