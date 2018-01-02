import { API } from 'aws-amplify-react-native';

import { 
    ROOT_CHANGED, 
    API_FETCH_USER_SETTINGS, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USERNAME_CHANGED
} from './actionTypes';

export function appInitialized() {
    return async function(dispatch, getState) {
      // since all business logic should be inside redux actions
      // this is a good place to put your app initialization code
      dispatch(changeAppRoot('login'));
    };
}

export function changeAppRoot(root) {
    return {type: ROOT_CHANGED, root: root};
}

export function initializeUserSettings(driverMode, startPoint, endPoint) {
    return {type: API_FETCH_USER_SETTINGS, driverMode: driverMode, startPoint: startPoint, endPoint: endPoint};
}

export function login(username) {
    return (dispatch, getState) => {
        // login logic would go here, and when it's done, we switch app roots
        const apiName = 'userProfile';
        const path = '/create/' + username;
        API.get(apiName, path).then(response => {
            console.log("Userprofile create response is ", response);
            const res = JSON.parse(response.res)
            console.log("Parsed res is ", res)
            const {
                drivingMode,
                startPoint,
                endPoint,
            } = res
            dispatch(changeAppRoot('after-login'));
            dispatch(initializeUserSettings(drivingMode == 'true', startPoint, endPoint))
        })
           .catch(err => {
            console.log(err);
        })
    };
}

export function usernameChanged(username) {
    return async function(dispatch, getState) {
        dispatch(_usernameChanged(username));
    }
}

function _usernameChanged(username) {
    return { type: LOGIN_USERNAME_CHANGED, newUsername: username }
}

export function passwordChanged(password) {
    return async function(dispatch, getState) {
        dispatch(_passwordChanged(password));
    }
}

function _passwordChanged(password) {
    return { type: LOGIN_PASSWORD_CHANGED, newPassword: password }
}