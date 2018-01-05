import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';

class DriverMembersContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'SettingsContainer');
    }

    render() {
        return (
            <View>
                <Text>
                    Driver Members
                </Text>
            </View>
        );
    }

}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DriverMembersContainer);