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
        paddingTop: 14,
        paddingBottom: 14,
        color: '#b3b3b3',
        marginTop: 0
    },
    tabBarSelectedTitleStyle: {
        borderTopWidth: 4,
        borderTopColor: 'white',
        color: '#fff'
    }
});

module.exports = styles;