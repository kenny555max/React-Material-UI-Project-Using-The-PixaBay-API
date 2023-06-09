import { legacy_createStore, applyMiddleware, compose } from "redux";
import rootReducers from '../reducers';
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
    rootReducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;