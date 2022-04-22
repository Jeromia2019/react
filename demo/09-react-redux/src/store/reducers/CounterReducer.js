import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET} from '../actions/counterAction'

const initialState = {
    count: 0,
    message: 'Le compteur est prêt !'
}

// Le state sera toujours un objet dans le store
const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
                message: `Le compteur a été incrémenté de ${action.payload} !`
            };
    
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
                message: `Le compteur a été décrémenté de ${action.payload} !`
            };
    
        case COUNTER_RESET:
            return {
                ...state,
                count: 0,
                message: `Le compteur a été réinitialisé !`
            };
    
        // Alternative
        // case COUNTER_RESET:
        //     return {...initialState};
    
        default:
            return state;
    }
}

// to : store.js
export default counterReducer;