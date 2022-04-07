import { useState } from 'react';

const DayNight = () => {

    const [day, setDay] = useState(false);

    const switchDayNight = () => {
        setDay(old => !old);
    }

    return(
        <>
        <h3>Jour/Nuit</h3>
        <p>{day ? "Jour" : "Nuit"}</p>
        <button onClick={switchDayNight}>Click</button>
        </>
    )
}

export default DayNight;