import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const citySchema = yup.object({
  city: yup.string().trim().required().min(2).matches(/^[\w\-\s]*$/i)
}).required()

function CitySearch({onSearch}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(citySchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Envoi des données
    onSearch(data.city)

    reset()
  };

  console.log(errors?.city);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='city'>Nom d'une ville : </label>
      <input id='city' defaultValue='' {...register('city')} />
      {errors?.city && (
        <span>{errors.city.message}</span>
      )}
      <button type='submit'>Rechercher</button>
    </form>
  );
}

CitySearch.defaultProps = {
  onSearch: () => {} // NOOP
}

export default CitySearch;
