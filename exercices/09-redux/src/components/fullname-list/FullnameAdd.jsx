import React from 'react'
import ButtonAdd from '../buttons/ButtonAdd';
import propTypes from 'prop-types'
// import {firstnameAdd, lastnameAdd} from '../../store/actions/fullnameAction';
import { useDispatch } from 'react-redux';

function FullnameAdd({data}) {

  const dispatch = useDispatch();

  const handleClick = () => {
    // const action = firstnameAdd(data)

  }

  return (
    <ButtonAdd onClick={handleClick}/>
  )
}

FullnameAdd.propTypes = {
  firstname: propTypes.string.isRequired,
  lastname: propTypes.string.isRequired,
  onClick: propTypes.func
}

FullnameAdd.defaultProps = {
  firstname: "Jhon",
  lastname: "Doe",
  onClick: () => { }
}
export default FullnameAdd