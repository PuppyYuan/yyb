'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    mineHeader: {
        height: 150,
        width: width,
        backgroundColor: '#45aa9e'
    },
    viewpager: {
        width: width,
        height: 150
    },
    page: {
        width: width,
        height: 150
    }
});

module.exports = styles;