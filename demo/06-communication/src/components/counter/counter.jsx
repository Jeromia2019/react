import { useState } from 'react';
import ActionButton, { ACTION_DOWN, ACTION_UP } from '../action-button/action-button';
import Display from '../display/display';
import ResetButton from '../reset-button/reset-button';

const Counter = () => {
    // Création d'une variable d'état
    const [count, setCount] = useState(0);

    const handleAction = (step, operator) => {
        setCount(count => {
            switch (operator) {
                case ACTION_UP:
                    return count + step;
                case ACTION_DOWN:
                    return count - step;
                default:
            }
        });
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <Display msg='Le compteur vaut' value={count} />
            <div>
                <ActionButton onAction={handleAction} />
                <ActionButton onAction={handleAction} step={3} />
                <ActionButton onAction={handleAction} step={5} />
                <ResetButton onReset={handleReset} />
            </div>
        </div>
    );
};

export default Counter;