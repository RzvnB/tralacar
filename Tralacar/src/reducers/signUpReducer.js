import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE, USERNAME_CHANGED, PASSWORD_CHANGED, EMAIL_CHANGED } from '../actions/actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    username: '',
    password: '',
    email: '',
    signUpSuccess: undefined,
});


export default function signUpReducer(state = initialState, action = {}) {
    switch(action.type) {
        case SIGN_UP_SUCCESS:
            return state.merge({
                signUpSuccess: true,
                username: '',
                password: '',
                email: ''
            });
        case SIGN_UP_FAILURE:
            return state.merge({
                signUpSuccess: false,
                username: '',
                password: '',
                email: ''
            });
        case USERNAME_CHANGED:
            return state.merge({
                username: action.newUsername
            });
        case PASSWORD_CHANGED:
            return state.merge({
                password: action.newPassword
            });
        case EMAIL_CHANGED:
            return state.merge({
                email: action.newEmail
            });
        default:
            return state;
    }
}
