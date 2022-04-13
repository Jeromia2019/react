import React, {useState} from 'react'
import Horloge from '../Horloge/HorlogeV2';

function DateDuJour() {

    const [heure, setHeure] = useState(null);

    const date = new Date();

    const dateOptions = { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const handleSwitch = () => {
        setHeure(date)
    }

    const dateDuJour = date.toLocaleDateString("fr-FR", dateOptions);
    
  return (
      <>
        {heure ? (
                <Horloge heure={heure} /> 
            ) : (
                dateDuJour
            )
        }
        <button onClick={handleSwitch}>Changer</button>
      </>
  )
}

export default DateDuJour