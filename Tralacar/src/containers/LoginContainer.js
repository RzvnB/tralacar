import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { Auth, Authenticator  } from 'aws-amplify-react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements'

import MyLoginButton from '../components/LoginButton';
import * as loginActions from '../actions/loginActions';

const gif = '../assets/login_background.gif';
const backgroundImage = '../assets/city_traffic_tint.jpg';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.onLoginPress = this.onLoginPress.bind(this);
        this.onSignUpPress = this.onSignUpPress.bind(this);
        this.onMapSelect = this.onMapSelect.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
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
        console.log('Component-Lifecycle', 'componentWillUnmount', 'LoginContainer');
    }

    changeUsername(username) {
        this.props.dispatch(loginActions.usernameChanged(username));
    }

    changePassword(password) {
        this.props.dispatch(loginActions.passwordChanged(password));
    }

    render() {
        const resizeMode = 'cover';
        return (

            <View
                style={styles.imageContainer}>
                <KeyboardAvoidingView
                    behavior="position"
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                    <View
                        style={{flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                    >
                        <View
                            style={{flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'}}
                        > 
                            <Icon
                                type='entypo'
                                name='user'
                                containerStyle={{marginTop: 15}}
                            />
                            <FormLabel labelStyle={{fontSize: 17}}>USERNAME</FormLabel>
                        </View>
                        <FormInput 
                            containerStyle={{width: '70%',  marginLeft: 0, marginRight: 0}}
                            onChangeText={this.changeUsername}/>
                        <View
                            style={{flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'}}
                        >
                            <Icon
                                type='entypo'
                                name='lock'
                                containerStyle={{marginTop: 15}}
                            />
                            <FormLabel labelStyle={{fontSize: 17}}>PASSWORD</FormLabel>
                        </View>
                        <FormInput 
                            secureTextEntry={true}
                            containerStyle={{width: '70%',  marginLeft: 0, marginRight: 0}}
                            onChangeText={this.changePassword}/>
                    </View>
                </KeyboardAvoidingView>
                <View
                    style={styles.buttonContainer}>
                    <MyLoginButton
                        large={true}
                        text='LOG IN'
                        fontSize={22}
                        fontWeight={'bold'}
                        raised={true}
                        backgroundColor='#1fdd55'
                        handlePress={this.onLoginPress}/>
                    <MyLoginButton
                        text='SIGN UP'
                        backgroundColor='#e04876'
                        handlePress={this.onSignUpPress}
                        containerStyle={{width: '40%', marginTop: 25, marginBottom: 10}}/>
                </View>

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
                navBarHidden: true,
                navBarTextFontBold: true,
                navBarTextFontFamily: 'normal',
                navBarBackgroundColor: '#2c2c2c',
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
        Auth.signIn(this.props.username, this.props.password)
            .then(user => {
                console.log("The user is ", user);
                this.props.dispatch(loginActions.login(user.username));
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
        backgroundColor: '#beb7cc'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    const { username, password } = state.loginReducer;
    return {
        username,
        password
    };
}

export default connect(mapStateToProps)(LoginContainer);
