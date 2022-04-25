const initialState = {
    recap: 1
}

export const recapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'recap/action':
            return {
                ...state,
                recap: state.recap + 1
            };
        default:
            return state;
    }
};

export default recapReducer;