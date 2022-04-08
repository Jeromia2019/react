
const Display = (props) => {

    // Récuperation des datas
    const msg = props.msg;
    const value = props.value;

    // Render
    return (
        <div>
            <span>{msg}{msg && ' : '}{value}</span>
        </div>
    );
};

export default Display;