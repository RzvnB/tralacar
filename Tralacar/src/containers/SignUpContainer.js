import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    BackHandler,
    Alert,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Icon } from 'react-native-elements'


import MyLoginButton from '../components/LoginButton';
import * as signUpActions from '../actions/signUpActions';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeFullname = this.changeFullname.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    componentWillMount() {
        // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        BackHandler.addEventListener('hardwareBackPress', function() {
            this.props.navigator.dismissModal({
                animationType: 'fade'
            });
        }.bind(this));
    }

    componentWillUnmount() {
        // this.keyboardDidShowListener.remove();
        // this.keyboardDidHideListener.remove();
        BackHandler.removeEventListener('hardwareBackPress');
    }

    _keyboardDidShow () {
        alert('Keyboard Shown');
    }
    
    _keyboardDidHide () {
        alert('Keyboard Hidden');
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

    changeFullname(fullname) {
        this.props.dispatch(signUpActions.fullnameChanged(fullname));
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
            <View style= {{backgroundColor: '#beb7cc', flex: 1}}>
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
                        <View
                            style={{flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'}}
                        >
                            <Icon
                                type='entypo'
                                name='email'
                                containerStyle={{marginTop: 15}}
                            />
                            <FormLabel labelStyle={{fontSize: 17}}>EMAIL</FormLabel>
                        </View>
                        <FormInput 
                            containerStyle={{width: '70%',  marginLeft: 0, marginRight: 0}}
                            onChangeText={this.changeEmail}/>
                    </View>
                </KeyboardAvoidingView>
                <View
                    style={styles.buttonContainer}>
                    <MyLoginButton
                        text='SIGN UP'
                        backgroundColor='#e04876'
                        large={true}
                        raised={true}
                        fontSize={22}
                        fontWeight={'bold'}
                        handlePress={this.signUp}
                        containerStyle={{width: '75%', marginTop: 25, marginBottom: 10}}/>
                </View>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


function mapStateToProps(state) {
    const { signUpSuccess } = state.signUpReducer;
    return { signUpSuccess };
}

export default connect(mapStateToProps)(SignUpContainer);