import * as types from './actionTypes';


export function updateStartPoint(coords) {
    return async function(dispatch, getState) {
        dispatch(_updateStartPoint(coords));
    }
}

export function _updateStartPoint(coords) {
    return {type: types.START_POINT_CHANGED, startPoint: coords};
}

export function updateEndPoint(coords) {
    return async function(dispatch, getState) {
        dispatch(_updateEndPoint(coords));
    }
}

export function _updateEndPoint(coords) {
    return {type: types.END_POINT_CHANGED, endPoint: coords};
}