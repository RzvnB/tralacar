import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import { Auth, API } from 'aws-amplify-react-native';
import { Card } from 'react-native-elements';

import DriversList from '../components/DriversList';
import MyLoginButton from '../components/LoginButton';
import * as homeActions from '../actions/homeActions';
import * as loginActions from '../actions/loginActions';


class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.onDriverMode = this.onDriverMode.bind(this);
    }

    componentDidMount() {
        console.log('Component-Lifecycle', 'componentDidMount', 'HomeContainer');
        // this.props.dispatch(homeActions.fetchDrivers());
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'HomeContainer');
    }

    onDriverMode() {
        this.props.dispatch(loginActions.changeAppRoot('driverMode'));
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 25,
                        marginLeft: 25,
                        marginRight: 25,
                        marginTop: 25,
                        borderColor: '#B0AFAF',
                        borderWidth: 0.7,
                      }}>
                </View> */}
                <Card 
                    title={"HELLO  " + this.props.username.toUpperCase() + " !"}
                    titleStyle={{ 
                        fontSize: 20,
                        fontFamily: 'sans-serif-light',
                        fontWeight: 'normal',
                    }}
                    containerStyle={{
                        
                        backgroundColor: '#FFFFFF',
                        borderRadius: 25,
                        marginLeft: 25,
                        marginRight: 25,
                        marginTop: 25,
                        borderColor: '#B0AFAF',
                        borderWidth: 0.7,
                    }}
                    >
                    <View style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',}}>
                    <Text>
                        You have
                    </Text>
                    <Text>
                        Whatever
                        </Text>
                    </View>
                </Card>
                <View
                    style={styles.buttonContainer}>
                    <MyLoginButton
                        text='FIND A DRIVER'
                        large={true}
                        fontSize={22}
                        fontWeight={'bold'}
                        raised={true}
                        backgroundColor='#fd982c'
                        // handlePress={this.onLoginPress}
                        />
                    <MyLoginButton
                        text='BE A DRIVER'
                        large={true}
                        fontSize={22}
                        fontWeight={'bold'}
                        raised={true}
                        backgroundColor='#332cfd'
                        handlePress={this.onDriverMode}
                        containerStyle={{marginTop: 25, marginBottom: 10}}/>
                </View>
            </View>
        )
        // if (this.props.driverMode) {
        //     return (
                
        //         <View style={styles.view}>
        //             <Text style={{color: 'white'}}>Driver mode enabled</Text>
        //         </View>
        //     );
        // } else {
        //     return (
                
        //         <View style={styles.view}>
        //             <Text style={{color: 'white'}}>Driver mode disabled</Text>
        //         </View>
        //     ); 
        // }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    // console.log("Home container state is ", state);
    const { driverMode } = state.settingsReducer;
    const { driversList } = state.homeReducer;
    const { username } = state.loginReducer;
    return {
        driverMode,
        driversList,
        username
    };
  }

export default connect(mapStateToProps)(HomeContainer);