import { START_POINT_CHANGED, END_POINT_CHANGED } from './actionTypes';
import { API } from 'aws-amplify-react-native';

export function updateStartPoint(coords) {
    return async function(dispatch, getState) {
        let { startPoint } = getState().settingsReducer;
        let apiName = 'userProfile';
        let path = '/startPoint/' + coords.lat + '/' + coords.long;
        API.get(apiName, path).then(response => {
            console.log("startPoint change response is ", response);
            dispatch(_updateStartPoint(coords));
        })
           .catch(err => {
                console.log(err);
        })
    }
}

export function _updateStartPoint(coords) {
    return {type: START_POINT_CHANGED, startPoint: coords};
}

export function updateEndPoint(coords) {
    return async function(dispatch, getState) {
        let { startPoint } = getState().settingsReducer;
        let apiName = 'userProfile';
        let path = '/endPoint/' + coords.lat + '/' + coords.long;
        API.get(apiName, path).then(response => {
            console.log("endPoint change response is ", response);
            dispatch(_updateEndPoint(coords));
        })
           .catch(err => {
                console.log(err);
        })
        
    }
}

export function _updateEndPoint(coords) {
    return {type: END_POINT_CHANGED, endPoint: coords};
}