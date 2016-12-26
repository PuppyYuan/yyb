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
    },
    list_item: {
        alignItems: 'center',
        width: width,
        height: width * 0.5,
        marginTop: width * 0.01
    },
    list_item_img: {
        width: width * 0.98, 
        height: width * 0.5
    },
    list_item_ttl: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        height: 30,
        lineHeight: 30,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    list_item_desc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 30,
        lineHeight: 20,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 14,
        backgroundColor: 'transparent',
    }
});

module.exports = styles;