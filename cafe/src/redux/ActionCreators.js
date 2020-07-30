import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchCoffee = () => dispatch => {
    dispatch(coffeeLoading());

    return fetch(baseUrl + 'coffee')
    .then(response => {
            if (response.ok) {
                 return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(coffee => dispatch(addCoffee(coffee)))
    .catch(error => dispatch(coffeeFailed(error.message)));
};


export const coffeeLoading = () => ({
    type: ActionTypes.COFFEE_LOADING
});

export const coffeeFailed = errMess => ({
    type: ActionTypes.COFFEE_FAILED,
    payload: errMess
});

export const addCoffee = coffee => ({
    type: ActionTypes.ADD_COFFEE,
    payload: coffee
});
