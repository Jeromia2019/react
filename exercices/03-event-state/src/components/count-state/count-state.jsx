import {useState} from 'react';

const CountIncrement = ({number}) => {

    const INIT_COUNT = 0;
    const MAX_COUNT = 40;

    const [count, setCount] = useState(INIT_COUNT);

    const increment = () => {
        setCount(nb => Math.min(nb + number, MAX_COUNT)) // Async !!
    }

    const reset = () => {
        setCount(INIT_COUNT)
    }

    // pour ajouter une condition : simplement utiliser les {}
        return (
        <>
        <h3>Valeur :{count}</h3>
        <p>(max : {MAX_COUNT})</p>
        <button onClick={increment} disabled={count >= MAX_COUNT}>+{number}</button>
        <br />
        {count > 0 && <button onClick={reset}>reset</button>}
        {/* <button onClick={() => setCount(INIT_COUNT)}>reset</button> */}
        </>
    )
}

CountIncrement.defaultProps = {
    number: 2
}

export default CountIncrement;