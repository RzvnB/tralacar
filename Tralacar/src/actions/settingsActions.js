import { DRIVER_TOGGLED } from './actionTypes';
import { API } from 'aws-amplify-react-native';

export function toggleDriverMode() {
    return async function(dispatch, getState) {
        let { driverMode } = getState().settingsReducer;
        let apiName = 'userProfile';
        let path = '/driverMode/' + !driverMode;

        API.get(apiName, path).then(response => {
            console.log("driverToggle response is ", response);
            dispatch(_toggleDriverMode());
        })
           .catch(err => {
                console.log(err);
        })
    }
}

export function _toggleDriverMode() {
    return {type: DRIVER_TOGGLED};
}

