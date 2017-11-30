import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');



class MapSelectContainer extends Component {
    constructor(props) {
        super(props);
        // console.log("coords are ", props.coords);
        // console.log("title is ", props.title);
        if (props.title.includes('start')) {
            this.updateCoord = this.updateCoord_Start.bind(this);
        } else {
            this.updateCoord = this.updateCoord_Start.bind(this);
        }
        var ASPECT_RATIO = width / height;
        var LATITUDE = props.coords.lat;
        var LONGITUDE = props.coords.long;
        var LATITUDE_DELTA = 0.0922;
        var LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
        var SPACE = 0.01;
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
        this.closeMapSelect = this.closeMapSelect.bind(this);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            marker: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            }
        };
    }

    closeMapSelect() {
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
        })
    }

    updateCoord_Start() {
        console.log("updating start coord");
    }

    updateCoord_End() {
        console.log("updating end coord");
    }

    onRegionChange(region) {
        this.setState({
            region, marker: {
                latitude: region.latitude,
                longitude: region.longitude
            }
        });
    }

    onRegionChangeComplete(region) {
        this.setState({
            region, marker: {
                latitude: region.latitude,
                longitude: region.longitude
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    region={this.state.region}
                    onPress={this.onMapPress}
                    loadingEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                    onRegionChange={this.onRegionChange}
                    cacheEnabled={false}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    <MapView.Marker
                        coordinate={this.state.marker}
                        anchor={{ x: 0, y: 1 }}
                        flat={true}
                    >
                        <MapView.Callout>
                            <View>
                                <Text>This is a plain view</Text>
                            </View>
                        </MapView.Callout>
                    </MapView.Marker>
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={this.closeMapSelect}
                        style={[styles.bubble, styles.button, { backgroundColor: '#dd2c1fcc' }]}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.updateCoord}
                        style={[styles.bubble, styles.button, { backgroundColor: '#1fdd55cc' }]}>
                        <Text>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

MapSelectContainer.propTypes = {
    provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        width: 100,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    bubble: {
        backgroundColor: 'rgba(255,0,255,0.5)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});

function mapStateToProps(state) {
    return {
    };
}

export default connect(null)(MapSelectContainer);