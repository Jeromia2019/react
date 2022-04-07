import {useState} from 'react';

const CalculateNb = ({number}) => {

    const [nb, setNb] = useState(1);

    const multiNb = () => {
        setNb(x => x * number)
    }

    const divideNb = () => {
        setNb(x => x / number)
    }

    return (
        <>
        <h3>Multpiplication par {number}</h3>
        <button onClick={multiNb}>x {number}</button>
        <h3>Division par {number}</h3>
        <button onClick={divideNb}>/ {number}</button>
        <p>Valeur : {nb}</p>
        </>
    )
}

CalculateNb.defaultProps = {
    number: 1
}

export default CalculateNb;