import React, { useEffect, useState } from 'react'

function Horloge() {

  const [time, setTime] = useState();

  const UpdateTime = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
  }

  // J'ai pas compris Aurélien a l'aide !
  setInterval(UpdateTime, 200);
  
  // useEffect(() => {
    
  //   setInterval(UpdateTime, 200);

  //   return () => {
  //   }
  // }, []);

  return (
    <p>{time}</p>
  )
}

export default Horloge