import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Button } from 'react-native-elements'

const MyLoginButton = (props) => (
    <Button
        containerViewStyle={{width: '50%', marginLeft: 0, marginRight: 0, ...props.containerStyle}}
        large
        onPress={props.handlePress}
        title={props.text}
        backgroundColor={props.backgroundColor}
    />
);


MyLoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    handlePress: PropTypes.func.isRequired,
};



export default MyLoginButton;