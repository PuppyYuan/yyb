'use strict';

import {StyleSheet, Dimensions, Platform } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    navi: {
        width: width,
        backgroundColor: '#45a99e',
        flexDirection: 'row',
        height: Platform.select({
            ios: 60,
            android: 40,
        }),
        paddingTop: Platform.select({
            ios: 20,
            android: 0,
        })
    },
    navi_mid: {
        flex: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navi_mid_txt: {
        color: '#fff',
        textAlign: 'center'
    },
    navi_left: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navi_right: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navi_btn_txt: {
        color: '#fff',
        textAlign: 'center',
    },
});

module.exports = styles;