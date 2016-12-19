'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    navi: {
        width: width,
        height: 40,
        backgroundColor: '#45a99e',
        flexDirection: 'row',
    },
    navi_txt: {
        width: width * 0.7,
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
    },
    navi_btn: {
        width: width * 0.15,
        height: 40,
    },
    navi_btn_txt: {
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
    },
});

module.exports = styles;