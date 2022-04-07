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
        <h3>Multiplication et division par {number} (function)</h3>
        <p>Valeur : {nb}</p>
        <button onClick={multiNb}>x {number}</button><br />
        <button onClick={divideNb}>÷ {number}</button>
        </>
    )
}

CalculateNb.defaultProps = {
    number: 1
}

export default CalculateNb;