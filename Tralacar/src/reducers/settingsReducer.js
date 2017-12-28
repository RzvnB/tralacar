import { 
    API_FETCH_USER_SETTINGS, 
    DRIVER_TOGGLED, 
    START_POINT_CHANGED, 
    END_POINT_CHANGED 
} from '../actions/actionTypes';
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
    thumbColor: '#ffffff'
});

export default function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case API_FETCH_USER_SETTINGS:
        var newDriverMode = action.driverMode;
        var newThumbColor = newDriverMode ? '#1fdd55' : '#ffffff';
        console.log("init actions is ", action);
        const newStartPoint = {
            lat: action.startPoint[0],
            long: action.startPoint[1]
        }
        const newEndPoint = {
            lat: action.endPoint[0],
            long: action.endPoint[1]
        }
        return state.merge({
            driverMode: newDriverMode,
            thumbColor: newThumbColor,
            startPoint: newStartPoint,
            endPoint: newEndPoint,
            thumbColor: newThumbColor
        });
    case DRIVER_TOGGLED:
        var newDriverMode = !state.driverMode;
        var newThumbColor = newDriverMode ? '#1fdd55' : '#ffffff';
        return state.merge({
            driverMode: newDriverMode,
            thumbColor: newThumbColor
        });
    case START_POINT_CHANGED:
        console.log("handling start point changed");
        console.log("new starting point " + action.startPoint.lat + " | " + action.startPoint.long);
        return state.merge({
            startPoint: action.startPoint
        });
    case END_POINT_CHANGED:
        return state.merge({
            endPoint: action.endPoint
        });
    default:
        return state;
  }
}