import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Button } from 'react-native-elements'

const LoginButton = ({text , backgroundColor, handlePress}) => (
    <Button
        containerViewStyle={{width: '100%', marginLeft: 0}}
        large
        onPress={handlePress}
        title={text}
        backgroundColor={backgroundColor}
    />
);


LoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    handlePress: PropTypes.func.isRequired,
};



export default LoginButton;