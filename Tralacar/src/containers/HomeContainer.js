import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import { Auth, API } from 'aws-amplify-react-native';

import DriversList from '../components/DriversList';
import * as homeActions from '../actions/homeActions';


class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Component-Lifecycle', 'componentDidMount', 'HomeContainer');
        this.props.dispatch(homeActions.fetchDrivers());
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'HomeContainer');
    }

    render() {
        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President',
              space: '1/5',
              icon: 'room'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman',
              space: '0/5',
              icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '2/5',
                icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '4/5',
                icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '4/5',
                icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '2/5',
                icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '3/5',
                icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '4/5',
                icon: 'room'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                space: '1/5',
                icon: 'room'
            },
        ]
        return (
            <View style={styles.view}>
                <DriversList 
                    list={this.props.driversList} 
                />
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
    const { driversList } = state.homeReducer;
    return {
        driverMode,
        driversList
    };
  }

export default connect(mapStateToProps)(HomeContainer);