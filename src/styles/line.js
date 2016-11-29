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
    navi: {
        width: width,
        height: 40, 
        backgroundColor: '#45a99e',
        flexDirection: 'row'
    },
    navi_txt: {
        width: width * 0.8,
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
    },
    navi_btn: {
        width: width * 0.1,
        height: 40,
    },
    navi_btn_txt: {
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
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
        fontSize: 16
    },
    list_item_desc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 30,
        lineHeight: 20,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 14
    }
});

module.exports = styles;