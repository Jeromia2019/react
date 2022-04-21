import React from 'react';

function ButtonReset({onClick, disabled}) {

  return (
    <button onClick={onClick} disabled={disabled}>Réinitialiser</button>
  )
}


export default ButtonReset;