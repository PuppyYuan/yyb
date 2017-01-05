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
        ...Platform.select({
            ios: {
                height: 60,
                paddingTop: 20,
            },
            android: {
                height: 40,
            },
        }),
    },
    navi_mid: {
        flex: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navi_mid_txt: {
        color: '#fff',
        ...Platform.select({
            ios: {
                lineHeight: 40,
            },
            android: {
                lineHeight: 30,
            },
        }),
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