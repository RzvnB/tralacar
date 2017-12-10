import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Auth, Authenticator,  } from 'aws-amplify-react-native';

import MyLoginButton from '../components/LoginButton';
import * as loginActions from '../actions/loginActions';

const gif = '../assets/login_background.gif';


class LoginContainer extends Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.onLoginPress = this.onLoginPress.bind(this);
        this.onSignUpPress = this.onSignUpPress.bind(this);
        this.onMapSelect = this.onMapSelect.bind(this);
    }

    componentWillMount() {
        // Alert.alert(
        //     'Alert Title',
        //     'My Alert Msg',
        //     [
        //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //       {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     { cancelable: false }
        //   )
        // Auth.currentUser()
        //     .then(user => {
        //     const state = user ? 'signedIn' : 'signIn';
        //     console.log("User state is ", state);
        // })
        //     .catch(err => console.log(err));
    }

    componentWillUnmount() {
        // Auth.currentUser().then(user => {
        //     const state = user ? 'signedIn' : 'signIn';
        //     console.log("User state is ", state);
        // }).catch(err => logger.error(err));
        console.log('Component-Lifecycle', 'componentWillUnmount', 'LoginContainer');
    }

    handleAuthStateChange() {
        console.log("HANDLING AUTH STATE CHANGE");
    }

    render() {
        const resizeMode = 'cover';
        return (

            <View
                style={styles.imageContainer}>
                <Image
                    style={{ width: '100%', resizeMode: resizeMode, flex: 1 }}
                    source={ require('./../assets/login_background.gif')}>
                    <View
                        style={styles.buttonContainer}>
                        <MyLoginButton
                            text='Login'
                            backgroundColor='#1fdd55'
                            handlePress={this.onLoginPress}/>
                        <MyLoginButton
                            text='Sign Up'
                            backgroundColor='#424242'
                            handlePress={this.onSignUpPress}/>
                    </View>
                </Image>

            </View>
        );
    }

    onSignUpPress() {
        console.log("signing up");
        this.props.navigator.showModal({
            screen: 'SignUpContainer',
            title: 'Sign Up', 
            animationType: 'fade',
            navigatorStyle: {
                navBarTextFontBold: true,
                navBarTextFontFamily: 'normal',
                navBarBackgroundColor: '#424242',
                navBarTextFontSize: 20,
                navBarTextColor: '#FFFFFF',
                navBarTitleTextCentered: true,
                topBarElevationShadowEnabled: true,
            },
            navigatorButtons: {
                leftButtons: [ {} ]
            },
        });
    }

    onLoginPress() {
        Auth.signIn("razvanescu", "razvanescu12")
            .then(user => {
                console.log("The user is ", user);
                Auth.currentAuthenticatedUser()
                    .then(user => {
                        console.log("Current authenticated user is ", user);
                    })
                    .catch(err => console.log("ERROR IS ", err));
                this.props.dispatch(loginActions.login());
            })
            .catch(err => console.log(err));
        
    }

    onMapSelect() {
        this.props.navigator.showModal({
            screen: 'MapSelectContainer',
            title: 'MapSelect',
            animationType: 'slide-up',
        });
    }

}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'stretch',
        // flexDirection: 'column',
        // justifyContent: 'center',
        backgroundColor: '#1b1b1b'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        // marginBottom: 0,
        // marginTop: 0,
    }
});

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(LoginContainer);
