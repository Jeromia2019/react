import React from 'react';
// useSelector : Permet d'interagir directement avec la valeur du state
import { useSelector } from 'react-redux'

function CounterDisplay() {

  // s = state
  const count = useSelector(s => s.counter.count)

  return (
    <div>
        <h2>La valeur du compteur est </h2>
        <p>{count}</p>
    </div>
  )
}

export default CounterDisplay