import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';
import flagImg from './assets/flag-blue.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 38.78825;
const LONGITUDE = -123.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class LoadingMap extends React.Component {
  constructor(props) {
    super(props);
    this.onRegionChange = this.onRegionChange.bind(this)
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this)
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

  onRegionChange(region) {
    this.setState({ region });
  }

  onRegionChangeComplete(region) {
    this.setState({region, marker: { latitude: region.latitude, 
                             longitude: region.longitude }});
    // console.log(this.state);
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
          <View style={styles.bubble}>
            <Text>{this.state.region.latitude}, {this.state.region.longitude}</Text>
          </View>
        </View>
      </View>
    );
  }
}

LoadingMap.propTypes = {
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
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'green',
    borderRadius: 25,
  },
});

module.exports = LoadingMap;