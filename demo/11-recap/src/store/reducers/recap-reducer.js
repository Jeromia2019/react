import recapAction from '../actions/recap-action';
const { createReducer } = require('@reduxjs/toolkit');

const initialState = {
    recap: 1
}

export const recapReducerOld = (state = initialState, action) => {
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

const recapReducer = createReducer(initialState, (builder) =>  {
    builder.addCase(recapAction.type, (state, action) => {
        return {
            recap: state.recap + action.payload
        }
    })
    .addDefaultCase();
})

export default recapReducer;