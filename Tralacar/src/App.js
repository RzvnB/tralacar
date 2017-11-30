import React from 'react'; // eslint-disable-line
import {createStore, applyMiddleware, combineReducers} from "redux";
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import thunk from "redux-thunk";

import { registerContainers } from './containers';
// import configureStore from './store/configureStore';
import * as reducers from "./reducers";
import * as appActions from "./actions/loginActions";


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerContainers(store, Provider);

export default class App {
    constructor() {
        console.log(appActions.appInitialized);
        store.subscribe(this.onStoreUpdate.bind(this));
        store.dispatch(appActions.appInitialized());
    }

    onStoreUpdate() {
        const {root} = store.getState().navReducer;
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
                            navBarBackgroundColor: 'gray',
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
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            label: 'Home',
                            screen: 'HomeContainer',
                            icon: require('./assets/home.png'),
                            selectedIcon: require('./assets/home_selected.png'),
                            title: 'Home',
                            overrideBackPress: true,
                            navigatorStyle: {
                                navBarTextFontBold: true,
                                navBarTextFontFamily: 'normal',
                                navBarBackgroundColor: '#424242',
                                navBarTextFontSize: 20,
                                navBarTextColor: '#FFFFFF',
                                navBarTitleTextCentered: true,
                                topBarElevationShadowEnabled: true
                            },
                            navigatorButtons: {}
                        },
                        {
                            label: 'Settings',
                            screen: 'SettingsContainer',
                            icon: require('./assets/settings.png'),
                            selectedIcon: require('./assets/settings_selected.png'),
                            title: 'Settings',
                            overrideBackPress: true,
                            navigatorStyle: {
                                drawUnderNavBar: false,
                                navBarTranslucent: false,
                                navBarTextFontBold: true,
                                navBarTextFontFamily: 'normal',
                                navBarBackgroundColor: '#424242',
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
                        tabBarBackgroundColor: '#424242',
                        tabBarButtonColor: '#8a8a8a',
                        tabBarSelectedButtonColor: '#ffffff',
                        bottomTabBadgeTextColor: 'green',
                        bottomTabBadgeBackgroundColor: 'black'
                    },
                    animationType: 'slide-up'
                });
                // console.log("after-login");
                // store.dispatch(appActions.appInitialized());
                return;
                
            default:
                console.error('Unknown app root');
        }
    }
}
