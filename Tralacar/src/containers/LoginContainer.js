import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image
  } from 'react-native';
import {connect} from 'react-redux';
// import {LoginButton, AccessToken} from 'react-native-fbsdk';

import LoginButton from '../components/LoginButton';
import * as loginActions from '../actions/loginActions';

const gif = '../assets/login_background.gif';


class LoginContainer extends Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.onLoginPress = this.onLoginPress.bind(this);
        this.onMapSelect = this.onMapSelect.bind(this);
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'LoginContainer');
    }

    render() {
        const resizeMode = 'cover';
        return (
            
            <View 
                style={styles.view}>
                <Image
                    style={{width: '100%',resizeMode: resizeMode }}
                    source={ require('./../assets/login_background.gif') }
                />
                {/* <View>
        <LoginButton
        //   publishPermissions={[]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View> */}
                <View
                    style={styles.button}>
                    <LoginButton 
                        text="Open map selector"
                        backgroundColor='#1e84dd'
                        handlePress={this.onMapSelect}>
                    </LoginButton>
                </View>
                <View
                    style={styles.button}>
                    <LoginButton
                        text='Login'
                        backgroundColor='#1fdd55'
                        handlePress={this.onLoginPress}>
                    </LoginButton>
                </View>
            </View>
        );
    }

    onLoginPress() {
        this.props.dispatch(loginActions.login());
        // this.props.navigator.showModal({
        //     screen: 'MapSelectContainer',
        //     title: 'MapSelect'
        // });
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
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#1b1b1b'
    },
    button: {
        marginBottom: 0,
        marginTop: 0,
    }
});

function mapStateToProps(state) {
    return {
    };
  }

export default connect(mapStateToProps)(LoginContainer);
