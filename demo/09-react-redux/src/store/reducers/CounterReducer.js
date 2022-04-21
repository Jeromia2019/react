import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET} from '../actions/CounterAction'

const initialState = {
    count: 0
}

// Le state sera toujours un objet dans le store
const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            };
    
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            };
    
        case COUNTER_RESET:
            return {
                ...state,
                count: 0
            };
    
        // Alternative
        // case COUNTER_RESET:
        //     return {...initialState};
    
        default:
            return state;
    }
}

export default counterReducer;