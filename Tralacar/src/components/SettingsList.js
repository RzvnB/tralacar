import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { List, ListItem } from "react-native-elements";


const SettingsList = ({switched, onSwitch, thumbColor, openMapSelector, subtitles}) => {
    console.log("Subtitles are ", subtitles);
    return (
    <List
        containerStyle={styles.listContainer}>
        <ListItem
            switchButton
            hideChevron
            title="Driver Mode"
            subtitle="Enable if you want to be a driver"
            onSwitch={onSwitch}
            switched={switched}
            titleStyle={styles.text}
            containerStyle={styles.elementContainer}
            subtitleStyle={styles.subtitle}
            switchOnTintColor='#227a3b'
            switchTintColor='gray'
            switchThumbTintColor={thumbColor}
            // subtitleContainerStyle={styles.elementContainer}
        />
        <ListItem
            hideChevron
            title="Choose starting point"
            subtitle={subtitles.start.lat.toString() + " | " + subtitles.start.long.toString()}
            titleStyle={styles.text}
            containerStyle={styles.elementContainer}
            subtitleStyle={styles.subtitle}
            onPress={openMapSelector.bind(this,'Choose starting point')}
            underlayColor='#000000'
        />
        <ListItem
            hideChevron
            title="Choose destination"
            subtitle={subtitles.end.lat.toString() + " | " + subtitles.end.long.toString()}
            titleStyle={styles.text}
            containerStyle={styles.elementContainer}
            subtitleStyle={styles.subtitle}
            onPress={openMapSelector.bind(this, 'Choose destination')}
            underlayColor='#000000'
        />
  </List>
)};

SettingsList.propTypes = {
    switched: PropTypes.bool.isRequired,
    thumbColor: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
    openMapSelector: PropTypes.func.isRequired,
    subtitles: PropTypes.object.isRequired
};

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
    }
});

export default SettingsList;