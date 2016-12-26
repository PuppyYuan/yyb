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
    navi_txt: {
        flex: 14,
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
    navi_btn: {
        flex: 3,
    },
    navi_btn_txt: {
        color: '#fff',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                lineHeight: 40,
            },
            android: {
                lineHeight: 30,
            },
        }),
    },
});

module.exports = styles;