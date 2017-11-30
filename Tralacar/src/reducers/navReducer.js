import * as types from '../actions/actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    root: undefined // 'login' / 'after-login'
});

export default function navReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ROOT_CHANGED:
            return state.merge({
                root: action.root
            });
        default:
            return state;
    }
}