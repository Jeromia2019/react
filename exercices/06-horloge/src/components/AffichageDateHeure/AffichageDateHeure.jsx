import React, { useState } from 'react'
import DateDuJour from '../DateDuJour/DateDuJour'
import Horloge from '../Horloge/Horloge'

function AffichageDateHeure() {

  const [dateJour, setDateJour] = useState(true);

  const switchDisplay = () => {
    setDateJour(element => !element);
  }

  return (
    <>
    {dateJour ? <DateDuJour/> : <Horloge/>}
    <button onClick={switchDisplay}>{dateJour ? "Voir l'heure" : "Voir la date d'aujourd'hui"}</button>
    </>
  )
}

export default AffichageDateHeure