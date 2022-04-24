import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import irailReducer from './reducers/irail-reducer';

const reducer = combineReducers({
    irail: irailReducer
});

let store;
if (process.env.NODE_ENV !== 'development') {
    // Store avec le middleware 'thunk'
    store = createStore(reducer, applyMiddleware(thunkMiddleware));
}
else {
    // Store avec le middleware 'thunk' et le necessaire pour le redux evTools
    store = createStore(reducer, compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
}

export default store;