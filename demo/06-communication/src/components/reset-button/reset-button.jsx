
const ResetButton = (props) => {

    // Récuperation du callback à déclancher
    const onReset = props.onReset;

    // Render
    return (
        <div>
            <button onClick={() => onReset()} >Remise à zero</button>
        </div>
    );
};

// Affectation d'une valeur NOOP (No operation) aux props d'event
// Objectif => Le composant ne plante pas, s'il n'y a pas de valeur :)
ResetButton.defaultProps = {
    onReset: () => { }       // NOOP
};

export default ResetButton;