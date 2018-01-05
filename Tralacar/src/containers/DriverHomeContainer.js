import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';

import DriverMap from '../components/DriverMap';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const SPACE = 0.01;

class DriverHomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.calloutOnTouch = this.calloutOnTouch.bind(this);
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'SettingsContainer');
    }

    calloutOnTouch(listItem) {
        // console.log("hello ", listItem)
        return function() {
            console.log("hello ", listItem)
        }
    }

    render() {
        const list = [ 
            {
                id: "razvan111",
                destination: "Nume Strada 123",
                destinationCoordinate: {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE - SPACE, 
                },
                currentCoordinate: {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE + SPACE,
                }
            },
            {
                id: "numeutilizator245",
                destination: "Nume Strada 456",
                destinationCoordinate: {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE + SPACE, 
                },
                currentCoordinate: {
                    latitude: LATITUDE - SPACE,
                    longitude: LONGITUDE - SPACE,
                }
            }
        ]
        return (
            <DriverMap
                passengersList={list}
                calloutOnTouch={this.calloutOnTouch}
            >
            </DriverMap>
            // <View style={styles.container}>
                

            // </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6'
    },
});

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DriverHomeContainer);