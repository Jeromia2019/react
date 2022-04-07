import {useState} from 'react';

const FormExo = () => {
    
        const [nb1, setNb1] = useState('');
        const [nb2, setNb2] = useState('');
        const [operator, setOperator] = useState('');
        const [result, setResult] = useState('');

    const calculate = (e) => {
        e.preventDefault();

        setResult(
            // TODO Faire un switch et finiiii ! 
            eval(`${nb1} ${operator} ${nb2}`)
        )
    }

    return(
        <form>
            <label htmlFor="nb1">Nb1 : </label>
            <input type="text" id="nb1" 
                value={nb1}
                onChange={e => setNb1(e.target.value)}
            />
            <label htmlFor="operation">Opération : </label>
            <select name="operator" id="operation"
                onChange={e => setOperator(e.target.value)}
                >
                <option 
                value="+"
                selected={operator === "+"}
                >+</option>
                <option 
                value="-"
                selected={operator === "-"}
                >-</option>
                <option 
                value="*"
                selected={operator === "x"}
                >x</option>
                <option 
                value="/"
                selected={operator === "/"}
                >/</option>
            </select>
            <label htmlFor="nb2">Nb2 : </label>
            <input type="text" id="nb2" 
                value={nb2}
                onChange={e => setNb2(e.target.value)}
            />

            <button onClick={calculate}>Calculer</button>

            <input type="text" value={result} id="result" readonly="readonly" />
        </form>
    )
}

export default FormExo;