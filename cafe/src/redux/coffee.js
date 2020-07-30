//import { CAMPSITES } from '../shared/campsites';
import * as ActionTypes from './ActionTypes';

export const Coffee = (state = {
        isLoading: true,
        errMess: null,
        coffee: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE:
            return {...state, isLoading: false, errMess: null, coffee: action.payload};
        case ActionTypes.COFFEE_LOADING:
            return {...state, isLoading: true, errMess: null, coffee: []};
        case ActionTypes.COFFEE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};