import * as types from './actionTypes';


export function toggleDriverMode() {
    return async function(dispatch, getState) {
        dispatch(_toggleDriverMode());
    }
}

export function _toggleDriverMode() {
    return {type: types.DRIVER_TOGGLED};
}

