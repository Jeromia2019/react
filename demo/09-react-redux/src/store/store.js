import { legacy_createStore as createStore, combineReducers } from 'redux' 
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

export const store = createStore(reducer)

// to : index.js
export default store;