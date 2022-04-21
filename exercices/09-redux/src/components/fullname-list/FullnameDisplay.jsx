import React from 'react';
import { useSelector } from 'react-redux'
import FullnameForm from '../forms/FullnameForm';
import FullnameAdd from './FullnameAdd';

function FullnameDisplay() {

  const {firstname, lastname} = useSelector(s => s.fullname)

  return (
    <main>
      <FullnameForm />
      <FullnameAdd />
      <ul>
        <li>{firstname}{lastname}</li>
      </ul>
    </main>

  )
}

export default FullnameDisplay