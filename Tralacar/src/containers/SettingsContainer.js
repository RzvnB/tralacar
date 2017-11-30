import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';

import SettingsList from '../components/SettingsList';

class SettingsContainer extends Component {
    
    constructor(props) {
        super(props);
        // console.log("Props are ", props);
        // let settings = props.settings;
        this.state = {
            ...props.settings,
            thumbColor: '#ffffff'
        };
        // console.log("State is ", this.state);
        this.toggleDriverMode = this.toggleDriverMode.bind(this);
        this.onMapSelect = this.onMapSelect.bind(this);
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'SettingsContainer');
    }

    toggleDriverMode() {
        var newThumbColor = !this.state.driverMode ? '#1fdd55' : '#ffffff'; 
        this.setState({driverMode: !this.state.driverMode, thumbColor: newThumbColor});
    }

    onMapSelect(title) {
        var coords;
        if (title.includes('start')) {
            coords = this.state.startPoint;
        } else {
            coords = this.state.endPoint;
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
                        switched={this.state.driverMode}
                        onSwitch={this.toggleDriverMode}
                        thumbColor={this.state.thumbColor}
                        openMapSelector={this.onMapSelect}
                        subtitles={{start: this.state.startPoint, end: this.state.endPoint}}>
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
    return {
        settings: state.settingsReducer
    };
  }

export default connect(mapStateToProps)(SettingsContainer);