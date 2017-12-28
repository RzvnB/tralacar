import { Auth, API } from 'aws-amplify-react-native';

import { 
    SIGN_UP_FAILURE, 
    SIGN_UP_SUCCESS, 
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    EMAIL_CHANGED,
    FULLNAME_CHANGED
} from './actionTypes';

export function signUp() {
    return (dispatch, getState) => {
        const { username, password, email, fullname } = getState().signUpReducer;
        // let state = getState();
        // console.log("The state is ", state);
        Auth.signUp(username, password, email, false)
            .then(data => {
                console.log("Data after success sign-up ", data);
                dispatch(_signedUp(SIGN_UP_SUCCESS));
                // const apiName = 'userProfile';
                // const path = '/create/' + fullname;
                // API.get(apiName, path).then(response => {
                //     console.log("Userprofile create response is ", response);
                // })
                //    .catch(err => {
                //     console.log(err);
                // })
            })
            .catch(err => {
                console.log("Error after failed sign-up ", err);
                dispatch(_signedUp(SIGN_UP_FAILURE));
            })
    }
}

export function _signedUp(status) {
    return { type: status };
}

export function usernameChanged(username) {
    return async function(dispatch, getState) {
        dispatch(_usernameChanged(username));
    }
}

export function _usernameChanged(username) {
    return { type: USERNAME_CHANGED, newUsername: username }
}

export function passwordChanged(password) {
    return async function(dispatch, getState) {
        dispatch(_passwordChanged(password));
    }
}

export function _passwordChanged(password) {
    return { type: PASSWORD_CHANGED, newPassword: password }
}

export function emailChanged(email) {
    return async function(dispatch, getState) {
        dispatch(_emailChanged(email));
    }
}

export function _emailChanged(email) {
    return { type: EMAIL_CHANGED, newEmail: email }
}

export function fullnameChanged(fullname) {
    return async function(dispatch, getState) {
        dispatch(_emailChanged(fullname));
    }
}

export function _fullnameChanged(fullname) {
    return { type: EMAIL_CHANGED, newFullname: fullname }
}