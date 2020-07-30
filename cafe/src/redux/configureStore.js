import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Coffee } from './coffee';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            coffee: Coffee
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};

