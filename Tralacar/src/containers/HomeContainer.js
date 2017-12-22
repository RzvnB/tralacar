import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import { Auth } from 'aws-amplify-react-native';


class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Auth.currentAuthenticatedUser()
        //     .then(user => {
        //         console.log("Current authenticated user is ", user);
        //     })  
        //     .catch(err => console.log(err))
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log("Current authenticated user is ", user);
            })
            .catch(err => console.log("ERROR IS ", err));
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'HomeContainer');
    }

    render() {
        if (this.props.driverMode) {
            return (
                
                <View style={styles.view}>
                    <Text style={{color: 'white'}}>Driver mode enabled</Text>
                </View>
            );
        } else {
            return (
                
                <View style={styles.view}>
                    <Text style={{color: 'white'}}>Driver mode disabled</Text>
                </View>
            ); 
        }
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        // padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#1b1b1b'
    },
});

function mapStateToProps(state) {
    // console.log("Home container state is ", state);
    const { driverMode } = state.settingsReducer;
    return {
        driverMode
    };
  }

export default connect(mapStateToProps)(HomeContainer);