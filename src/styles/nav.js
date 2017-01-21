'use strict';

import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

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
        flexDirection: 'row',
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
    navi_btn_img: {
        width: 12,
        height: 15,
        marginRight: 4,
    }
});

module.exports = styles;