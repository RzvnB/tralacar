import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';


class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log('Component-Lifecycle', 'componentWillUnmount', 'HomeContainer');
    }

    render() {
        return (
            
            <View style={styles.view}>
                <Text style={{color: 'white'}}>Welcome home!</Text>
            </View>
        );
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
    return {
    };
  }

export default connect(mapStateToProps)(HomeContainer);