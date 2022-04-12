import React from 'react'

function DateDuJour() {
    const dateOptions = { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const dateDuJour = new Date().toLocaleDateString("fr-FR", dateOptions);
    
  return (
      <>
        <p>{dateDuJour}</p>
      </>
  )
}

export default DateDuJour