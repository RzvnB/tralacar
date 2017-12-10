import { START_POINT_CHANGED, END_POINT_CHANGED } from './actionTypes';


export function updateStartPoint(coords) {
    return async function(dispatch, getState) {
        dispatch(_updateStartPoint(coords));
    }
}

export function _updateStartPoint(coords) {
    return {type: START_POINT_CHANGED, startPoint: coords};
}

export function updateEndPoint(coords) {
    return async function(dispatch, getState) {
        dispatch(_updateEndPoint(coords));
    }
}

export function _updateEndPoint(coords) {
    return {type: END_POINT_CHANGED, endPoint: coords};
}