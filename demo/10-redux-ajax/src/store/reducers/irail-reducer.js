import { IRAIL_ERROR, IRAIL_LOADING, IRAIL_RESULT } from '../actions/erail-action';

const initialState = {
    data: null,
    isLoading: false,
    errorMessage: null
};

export const irailReducer = (state = initialState, action) => {
    switch (action.type) {
        case IRAIL_LOADING:
            return {
                ...state,
                isLoading: true,
                data: null,
                errorMessage: null
            };
        case IRAIL_RESULT:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case IRAIL_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default irailReducer;