import { USER_ADD, USER_REMOVE } from '../actions/userAction';

const stateInit = {
  userList: [],
  count: 0
};

const userReducer = (state = stateInit, action) => {

  switch (action.type) {

    case USER_ADD:
      return {
        ...state,
        userList: [action.payload, ...state.userList],
        count: state.count + 1
      };

    case USER_REMOVE:
      const userList = state.userList.filter(u => u.id !== action.payload)
      return {
        ...state,
        userList,
        count: userList.length,
      };

    default:
      return state;
  }
};

export default userReducer;
