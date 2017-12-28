import { API_FETCH_DRIVERS_LIST } from '../actions/actionTypes';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    driversList: []
});


export default function homeReducer(state = initialState, action = {}) {
    switch(action.type) {
        case API_FETCH_DRIVERS_LIST:
            return state.merge({
                driversList: action.driversList
            });
        default:
            return state;
    }

}