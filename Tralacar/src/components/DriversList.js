import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { List, ListItem, Button } from "react-native-elements";


class DriversList extends Component {

    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (
        // console.log("rendering item ", item);
        <View>
            <View
                style={styles.buttonContainer}>
                <Button
                    raised
                    large
                    disabled
                    disabledStyle={{backgroundColor: '#1b1b1b'}}
                    containerViewStyle={{width: '75%', marginLeft: 0, marginRight: 0}}
                    title={item.fullName} 
                    icon={{name: 'directions-car'}}
                />
                <Button
                    raised
                    large
                    disabled
                    disabledStyle={{backgroundColor: '#1b1b1b'}}
                    containerViewStyle={{width: '25%', marginLeft: 0, marginRight: 0}}
                    title={item.currentCarSize + '/' + item.maxCarSize} 
                />
            </View>
            <View 
                style={styles.buttonContainer}>
                <Button
                    containerViewStyle={{width: '50%', marginLeft: 0, marginRight: 0}}
                    icon={{name: 'room'}}
                    title={'View Map'}
                    backgroundColor='#1fa7dd'
                />
                <Button
                    containerViewStyle={{width: '50%', marginLeft: 0, marginRight: 0}}
                    iconRight={{name: 'arrow-upward'}}
                    backgroundColor='#1fdd55'
                    title={'Join'}
                />
            </View>
        </View>
    );

    render() {
        console.log("item list is ", this.props.list)
        return (
            // <List
            //     containerStyle={styles.listContainer}>
                
                <FlatList
                    data={this.props.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 18

    },
    subtitle: {
        color: '#aaaaaa',
        fontWeight: 'normal'
    },
    elementContainer: {
        backgroundColor: '#1b1b1b',
        borderBottomWidth: 0,
    },
    listContainer: {
        borderTopWidth:0,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'flex-end',
    }
});

export default DriversList;