import { legacy_createStore as createStore, combineReducers } from 'redux' 
import userReducer from './reducers/fullnameReducer';

const fullnameList = combineReducers({
    user: userReducer
})

export const store = createStore(fullnameList)

export default store;