import { legacy_createStore as createStore, combineReducers } from 'redux' 
import counterReducer from './reducers/CounterReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const devTools = (process.env.NODE_ENV === "development") ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(): undefined

// export const store = createStore(reducer)
export const store = createStore(reducer, devTools )

// to : index.js
export default store;