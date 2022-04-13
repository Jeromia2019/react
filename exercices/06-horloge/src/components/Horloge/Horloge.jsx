import React, { useEffect, useState } from 'react'

function Horloge() {

  const [time, setTime] = useState();

  const UpdateTime = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
    console.log("tic-tac...");
  }
  
  // J'ai pas compris Aurélien a l'aide !
  // setInterval(UpdateTime, 200);
  
  useEffect(() => {
    // ne se lance qu'au 1er changement du DOM du au click du bouton et donc PAS a l'affichage de ce dernier (qui peut-être en boucle)
    console.log("lancement");
    
    const timer = setInterval(UpdateTime, 200);
    
    return () => {
      clearInterval(timer)
      console.log("arrêt");
    }
  }, []);

  return (
    <p>{time}</p>
  )
}

export default Horloge