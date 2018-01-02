import { 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USERNAME_CHANGED
} from '../actions/actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    username: 'razvan555',
    password: 'razvan555',
});

export default function loginReducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOGIN_USERNAME_CHANGED:
            return state.merge({
                username: action.newUsername
            });
        case LOGIN_PASSWORD_CHANGED:
            return state.merge({
                password: action.newPassword
            });
        default:
            return state;
    }
}