// Fichier contenant les méthodes pour générer les objets "actions"
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET = 'counter/reset';

export const counterIncrement = (counterValue) => {
    
    return {
        type: COUNTER_INCREMENT,
        payload: counterValue
    }
};

// Fonction lambda pour le fun
export const counterDecrement = (counterValue) => ({
    type: COUNTER_DECREMENT,
    payload: counterValue
});

// Fuuuuuuun
export const counterReset = () => ({
    type: COUNTER_RESET
});

// to : CounterReducer.js