import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';

import SettingsList from '../components/SettingsList';
import * as settingsActions from '../actions/settingsActions';

class SettingsContainer extends Component {
    
    constructor(props) {
        super(props);
        
        this.toggleDriverMode = this.toggleDriverMode.bind(this);
        this.onMapSelect = this.onMapSelect.bind(this);
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'SettingsContainer');
    }

    toggleDriverMode() {
        this.props.dispatch(settingsActions.toggleDriverMode());
    }

    onMapSelect(title) {
        var coords;
        if (title.includes('start')) {
            coords = this.props.startPoint;
        } else {
            coords = this.props.endPoint;
        }
        this.props.navigator.showModal({
            screen: 'MapSelectContainer',
            title: title,
            animationType: 'slide-up',
            passProps: {
                title,
                coords,
            },
            navigatorStyle: {
                navBarHidden: true
            }
        });
    }


    render() {
        return (
            <View style={styles.view}>
                <View
                    style={{paddingBottom: 20}}>
                    <SettingsList
                        switched={this.props.driverMode}
                        onSwitch={this.toggleDriverMode}
                        thumbColor={this.props.thumbColor}
                        openMapSelector={this.onMapSelect}
                        subtitles={{start: this.props.startPoint, end: this.props.endPoint}}>
                    </SettingsList>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        backgroundColor: '#1b1b1b'
    },
});

function mapStateToProps(state) {
    // console.log("the state is ", state);
    const {
        driverMode,
        startPoint,
        endPoint,
        thumbColor
    } = state.settingsReducer;
    return {
        driverMode,
        startPoint,
        endPoint,
        thumbColor
    }
  }

export default connect(mapStateToProps)(SettingsContainer);