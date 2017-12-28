import { API } from 'aws-amplify-react-native';

import { API_FETCH_DRIVERS_LIST } from '../actions/actionTypes';

export function fetchDrivers() {
    return async function(dispatch, getState) {
        let apiName = 'userProfile';
        let path = '/drivers';

        API.get(apiName, path).then(response => {
            console.log("GET drivers response is ", response);
            const res = JSON.parse(response.res);
            console.log("Parsed res is ", res);
            dispatch(_fetchDrivers(res));
        })
           .catch(err => {
                console.log(err);
        })
    }
}

function _fetchDrivers(drivers) {
    return { type: API_FETCH_DRIVERS_LIST, driversList: drivers };
}