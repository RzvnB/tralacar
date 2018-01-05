import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '../config';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const propTypes = {
    provider: MapView.ProviderPropType,
    calloutOnTouch: PropTypes.func,
    passengersList: PropTypes.array
};

class DriverMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            route: []
        };

        this.addRouteCreator = this.addRouteCreator.bind(this);
    }

    addRouteCreator(item) {
        return function() {
            this.setState({route: [item]})
        }
    }

    removeRoute() {
        if (this.state.route != []) {
            this.setState({route: []})
        }
    }

    renderMarker(item, idx) {
        return (
            <MapView.Marker
                key={idx}
                coordinate={item.currentCoordinate}
                title={"Vreau sa merg la " + item.destination}
                description="Apasa daca vrei sa ma iei cu tine"
                onCalloutPress={this.props.calloutOnTouch(item)}
                onPress={this.addRouteCreator(item).bind(this)}
            />
        );
    }

    renderRoute(item) {
        return (
            <MapViewDirections
                origin={item.currentCoordinate}
                destination={item.destinationCoordinate}
                apikey={GOOGLE_MAPS_KEY}
                strokeWidth={5}
                strokeColor="blue"
            />
        );
    }

    render() {
        const { region, markers } = this.state;
        console.log("rendering mapview")
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={region}
                    onPress={this.removeRoute.bind(this)}
                >
                    {
                        this.props.passengersList.map((item, idx) => this.renderMarker(item, idx))
                    }
                    {
                        this.state.route.map((item, idx) => this.renderRoute(item))
                    }
                </MapView>
            </View>
        );
    }
}

DriverMap.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default DriverMap;