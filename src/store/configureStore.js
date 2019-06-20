import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk'

import { appReducer } from './appReducer';
import {cartReducer} from './cartReducer';

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
