export const ACTION_UP = 'up';
export const ACTION_DOWN = 'down';

const ActionButton = (props) => {

    // Récuperation des datas et des callbacks
    const { step, onAction } = props;

    // Render
    return (
        <div>
            <button onClick={() => onAction(step, ACTION_UP)}>+ {step}</button>
            <button onClick={() => onAction(step, ACTION_DOWN)}>- {step}</button>
        </div>
    );
};

ActionButton.defaultProps = {
    step: 1,
    onAction: () => { }          // Noop
};

export default ActionButton;