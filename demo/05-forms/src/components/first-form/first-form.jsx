import {useState} from 'react';

const ContactForm = () => {
    
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [gender, setGender] = useState('x');
        const [condition, setCondition] = useState('');

    const btnSubmit = (e) => {
        e.preventDefault();
        const data = {firstname, lastname, gender, condition};
        console.log(data);
        setFirstname('')
        setLastname('')
        setGender('x')
        setCondition(false)
    }

    return (
        <>
        <h3>Formulaire de contact</h3>
        <form onSubmit={btnSubmit}>
            <div>
                <label htmlFor="firstname">Prénom </label>
                <input id="firstname" type="text" 
                    value ={firstname}
                    onChange={e => setFirstname(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastname">Nom </label>
                <input id="lastname" type="text"
                    value ={lastname}
                    onChange={e => setLastname(e.target.value)}
                />
            </div>
            <div>
                <label>Sexe</label>
                <input id="radioH" type="radio" name="gender" value="H"
                    checked={gender === "H"}
                    onChange={e => setGender(e.target.value)}
                />
                <label htmlFor="radioH">Homme</label>
                <input id="radioF" type="radio" name="gender" value="F"
                    checked={gender === "F"}
                    onChange={e => setGender(e.target.value)}
                />
                <label htmlFor="radioF">Femme</label>
                <input id="radioX" type="radio" name="gender"
                    checked={gender === "x"}
                    // ↓ est égal à :  value="x", {e => setGender(e.target.value)}
                    onChange={() => setGender("x")}
                />
                <label htmlFor="radioX">x</label>
            </div>
            <div>
                <label htmlFor="condition">Accepter les conditions</label>
                <input id="condition" type="checkbox" name=""
                    checked ={condition}
                    onChange={e => setCondition(e.target.checked)}
                />
            </div>
            <button type="submit" disabled={!(firstname && lastname)}> Envoyer</button>
        </form>
        </>
    )
}

export default ContactForm;