import { legacy_createStore as createStore, combineReducers } from 'redux' 
import counterReducer from './reducers/CounterReducer';

const reducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducer)

export default store;