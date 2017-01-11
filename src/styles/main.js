'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#2294f0',
        alignItems: 'center',
    },
    tabBarTitleStyle: {
        fontSize: 16,
        color: '#cdcdcd',
    },
    tabBarSelectedTitleStyle: {
        color: '#fff'
    }
});

module.exports = styles;