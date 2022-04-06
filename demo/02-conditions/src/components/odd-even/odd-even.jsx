const NbEven = ({number}) => {

    if(isNaN(number) || number === '') return <p>Le nombre entré est erroné!</p>

    const res = (number % 2 === 0) ? 'paire' : 'impaire';

    return (
        <>
        <h1>Hello</h1>
        <p>Le nombre {number} est {res}</p>
        </>
    )
}

export default NbEven;