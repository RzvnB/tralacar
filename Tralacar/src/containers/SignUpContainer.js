import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    BackHandler,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements'

import MyLoginButton from '../components/LoginButton';
import * as signUpActions from '../actions/signUpActions';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            this.props.navigator.dismissModal({
                animationType: 'fade'
            });
        }.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    
    changeUsername(username) {
        this.props.dispatch(signUpActions.usernameChanged(username));
    }

    changePassword(password) {
        this.props.dispatch(signUpActions.passwordChanged(password));
    }

    changeEmail(email) {
        this.props.dispatch(signUpActions.emailChanged(email));
    }

    signUp() {
        this.props.dispatch(signUpActions.signUp());
    }

    render() {
        if (this.props.signUpSuccess) {
            Alert.alert(
                'SUCCESS',
                'Sign Up was successful!',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        } 
        if (this.props.signUpSuccess === false) {
            Alert.alert(
                'FAILURE',
                'Sign Up was unsuccessful!',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }
        return (
            <View style= {{backgroundColor: 'white', flex: 1}}>
                <View>
                    <FormLabel>Username</FormLabel>
                    <FormInput onChangeText={this.changeUsername}/>
                    <FormLabel>Password</FormLabel>
                    <FormInput onChangeText={this.changePassword}/>
                    <FormLabel>Email</FormLabel>
                    <FormInput onChangeText={this.changeEmail}/>
                </View>
                <View
                    style={styles.buttonContainer}>
                    <MyLoginButton
                        text='Sign Up'
                        backgroundColor='#1fdd55'
                        handlePress={this.signUp}
                        containerStyle={{ width: '100%'}}/>
                </View>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 0,
        marginTop: 0,
    }
});


function mapStateToProps(state) {
    const { signUpSuccess } = state.signUpReducer;
    return { signUpSuccess };
}

export default connect(mapStateToProps)(SignUpContainer);