import * as types from '../actions/actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    driverMode: false,
    startPoint: {
        lat: 45.7489,
        long: 21.2087
    },
    endPoint: {
        lat: 45.7489,
        long: 21.2087
    },
});

export default function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.DRIVER_TOGGLED:
        return state;
    case types.START_POINT_CHANGED:
        return state;
    case types.END_POINT_CHANGED:
        return state;
    default:
        return state;
  }
}