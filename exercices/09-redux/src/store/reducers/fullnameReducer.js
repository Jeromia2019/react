import { USER_ADD } from '../actions/fullnameAction';

const stateInit = {
  users: []
};

const userReducer = (state = stateInit, action) => {
  switch (action.type) {
    case USER_ADD:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};

export default userReducer;
