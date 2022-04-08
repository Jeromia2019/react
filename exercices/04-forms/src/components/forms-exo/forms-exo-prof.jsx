import {useState} from 'react';
import operatorsEnum from '../../enums/operators-enum'

// le * ici est parce que le regex est vérifié a chaque input donc il serait obligé de taper le .0 et pas fluidement . ...
const regexNb = /^[0-9]+(\.[0-9]*)?$/;

const FormExoProf = () => {
    
        const [nb1, setNb1] = useState('');
        const [nb2, setNb2] = useState('');
        const [operator, setOperator] = useState('+');
        const [result, setResult] = useState('');

        const inputNumberOnly = (e, setState) => {
            // On récupère value et on permet de taper une , pour un .
            let value = e.target.value.replace(',', '.');
            // Permet de mettre 0. si l'utilisateur commencer avec juste un . ou une , 
            if (value.startsWith('.')) {
                value = '0' + value;
            }
            // Conditionne l'input des nombres pour ne pas permettre l'utilisation de texte
            if (value === '' || regexNb.test(value)) {
                setState(value)
            }
        }

        const submit = (e) =>{
            e.preventDefault();

        // const submit = (e) =>{
        //     e.preventDefault();

        //     const number1 = parseFloat(nb1);
        //     const number2 = parseFloat(nb2);

        //     // Si on l'assigne pas, il créé automatiquement un var
        //     // let result;
        //     switch(operator){
        //         case operatorsEnum.ADD: 
        //         setResult(number1 + number2)
        //         break;
        //         case operatorsEnum.SUB: 
        //         setResult(number1 - number2)
        //         break;
        //         case operatorsEnum.MULTI: 
        //         setResult(number1 * number2)
        //         break;
        //         case operatorsEnum.DIV: 
        //         if (number2 === 0) {
        //             setResult(number1 / number2)
        //         }
        //         else setResult("Division par 0 impossible !")
        //         break;
        //         default:
        //     }
        // }

            // ↓ Pareil que ↑
            setResult(() => {
                
                const number1 = parseFloat(nb1);
                const number2 = parseFloat(nb2);
                
                switch(operator){
                    case operatorsEnum.ADD: 
                        return number1 + number2
                case operatorsEnum.SUB: 
                    return number1 - number2
                case operatorsEnum.MULTI: 
                    return number1 * number2
                case operatorsEnum.DIV: 
                    if (number2 !== 0) {
                        return number1 / number2
                    }
                    else return "Division par zéro"
                default: return "Opération non supportée"
            } 
        })
    
        // Pour focus l'élément voulu après le calcul (submit)
        // const inputNb1 = useRef();
        // inputNb1.current.focus()
    
    }
    return(
        <form onSubmit={submit}>
            <label htmlFor="nb1">Nb1 : </label>
            <input type="text" id="nb1" 
                value={nb1}
                onChange={e => inputNumberOnly(e, setNb1)}
            />
            <label htmlFor="operators">Opération : </label>
            <select name="operators" id="operators" 
            value={operator}
            onChange={e => setOperator(e.target.value)}>
            {/* .entries() */}
            {Object.entries(operatorsEnum).map(([key,value]) => (
                <option key={key} value={value}>{value}</option>
            ))}
            {/* .values() */}
            {/* {Object.values(operatorsEnum).map((value) => (
                <option value={value}>{value}</option>
            ))} */}
            </select>
            <label htmlFor="nb2">Nb2 : </label>
            <input type="text" id="nb2" 
                value={nb2}
                onChange={e => inputNumberOnly(e, setNb2)}
            />

            <button type="submit" disabled={!nb1 || !nb2}>Calculer</button>

            <input type="text" value={result} id="result" readonly="readonly" />
        </form>
    )
}

export default FormExoProf;