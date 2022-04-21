import React from 'react';
import propTypes from 'prop-types'

function ButtonAdd({onClick}) {
  return (
      <button onClick={onClick}>Ajouter</button>
  )
}

ButtonAdd.propTypes = {
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired,
    onClick: propTypes.func
}

ButtonAdd.defaultProps = {
    firstname: "Jhon",
    lastname: "Doe",
    onClick: () => { }
}

export default ButtonAdd