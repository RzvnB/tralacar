import React from 'react'; // eslint-disable-line
import {createStore, applyMiddleware, combineReducers} from "redux";
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import thunk from "redux-thunk";
import Amplify from 'aws-amplify-react-native';


import { registerContainers } from './containers';
// import configureStore from './store/configureStore';
import * as reducers from "./reducers";
import * as appActions from "./actions/loginActions";
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
console.disableYellowBox = true;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerContainers(store, Provider);

class App {
    constructor(props) {
        console.log(appActions.appInitialized);
        store.subscribe(this.onStoreUpdate.bind(this));
        store.dispatch(appActions.appInitialized());
    }

    onStoreUpdate() {
        const { root } = store.getState().navReducer;
        // handle a root change
        // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
        if (this.currentRoot != root) {
          this.currentRoot = root;
          this.startApp(root);
        }
    }

    startApp(root) {
        switch(root) {
            case 'login':
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'LoginContainer',
                        title: 'LOG IN',
                        navigatorStyle: {
                            navBarHidden: true,
                            navBarTextFontBold: false,
                            navBarTextFontFamily: 'normal',
                            navBarBackgroundColor: '#474747',
                            navBarTextFontSize: 19,
                            navBarTextColor: '#FFFFFF',
                            navBarTitleTextCentered: true,
                            topBarElevationShadowEnabled: false
                        },
                    },
                    animationType: 'fade'
                });
                return;
            case 'after-login':
                const { username } = store.getState().loginReducer;
                Navigation.startSingleScreenApp({
                    screen: {
                        label: 'Home',
                        screen: 'HomeContainer',
                        title: 'Welcome ' + username,
                        overrideBackPress: true,
                        navigatorStyle: {
                            navBarHidden: true,
                            navBarTextFontBold: false,
                            navBarTextFontFamily: 'sans-serif-light',
                            navBarBackgroundColor: '#FFFFFF',
                            navBarTextFontSize: 20,
                            navBarTextColor: '#000000',
                            navBarTitleTextCentered: true,
                            topBarElevationShadowEnabled: true
                        },
                        navigatorButtons: {},
                    },
                    animationType: 'fade'
                });
                return;
            case 'driverMode':
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            label: 'Map',
                            screen: 'DriverHomeContainer',
                            icon: require('./assets/driver_maps.png'),
                            title: 'Map',
                            overrideBackPress: false,
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                        },
                        {
                            label: 'Members',
                            screen: 'DriverMembersContainer',
                            icon: require('./assets/list_icon.png'),
                            title: 'Members',
                            overrideBackPress: false,
                            navigatorStyle: {
                                drawUnderNavBar: false,
                                navBarTranslucent: false,
                                navBarTextFontBold: true,
                                navBarTextFontFamily: 'normal',
                                navBarBackgroundColor: '#2c2c2c',
                                navBarTextFontSize: 20,
                                navBarTextColor: '#FFFFFF',
                                navBarTitleTextCentered: true,
                                topBarElevationShadowEnabled: true
                            },
                            navigatorButtons: {}
                        }
                    ],
                    appStyle: {
                        forceTitlesDisplay: true,
                        tabBarBackgroundColor: '#FFFFFF',
                        tabBarButtonColor: '#8a8a8a',
                        tabBarSelectedButtonColor: '#332cfd',
                        bottomTabBadgeTextColor: 'green',
                        bottomTabBadgeBackgroundColor: 'black'
                    },
                    animationType: 'slide-up'
                });
                return;
            default:
                console.error('Unknown app root');
        }
    }
}

// export default withAuthenticator(App);
export default App;