import React, { useEffect, useState } from 'react'

function Horloge({heure}) {

  const [time, setTime] = useState();

  
    // const UpdateTime = () => {
    //       setTime(heure.toLocaleTimeString());
    //     }


      useEffect(() => {

        setTime(heure.toLocaleTimeString());

          return () =>{
          }

    }, [heure]);

  return (
    <>{time}</>
  )
}

export default Horloge