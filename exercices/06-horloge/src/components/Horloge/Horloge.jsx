import React, { useEffect, useState } from 'react'

function Horloge() {

  const [time, setTime] = useState();
  
  useEffect(() => {
    
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 200);

    return () => {
    }
  }, []);

  return (
    <p>{time}</p>
  )
}

export default Horloge