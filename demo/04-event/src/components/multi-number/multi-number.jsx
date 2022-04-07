import {useState} from 'react';

const MultiNumber = ({multiplier}) => {

    const [nb, setNb] = useState(1);

    const handleMulti = () => {
        setNb(x => x * multiplier)
    }

    return (
        <>
        <h3>Miultpiplication par {multiplier}</h3>
        <p>Valeur : {nb}</p>
        <button onClick={handleMulti}>x {multiplier}</button>
        </>
    )
}

MultiNumber.defaultProps = {
    multiplier: 1
}

export default MultiNumber;