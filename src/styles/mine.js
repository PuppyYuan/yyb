'use strict';

import {StyleSheet, Dimensions, Platform } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mineHeader: {
        ...Platform.select({
            ios: {
                height: 140,
                paddingTop: 20,
            },
            android: {
                height: 120,
            },
        }),
        width: width,
        backgroundColor: '#45aa9e',
        flexDirection: 'row',
    },
    mineHeaderLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mineHeaderLeftImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2
    },
    mineHeaderMid: {
        flex: 3,
    },
    mineHeaderMidTop: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    mineHeaderMidTopTxt: {
        color: '#ededed',
        fontSize: 16
    },
    mineHeaderMidBot: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    mineHeaderMidBotNum: {
        color: '#ededed',
        fontSize: 14,
    },
    mineHeaderMidBotTxt: {
        marginLeft: 6,
        color: '#ededed',
        fontSize: 10,
    },
    mineHeaderRight: {
        flex: 1,
    },
    mineHeaderRightTop: {
        flex: 1,
        alignItems: 'flex-end',
    },
    mineHeaderRightTopImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10,
    },
    mineHeaderRightMid: {
        flex: 1,
    },
    mineHeaderRightBot: {
        flex: 1,
        justifyContent: 'center',
    },
    mineHeaderRightBotBtn: {
        color: '#ededed',
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 10,
        marginRight: 10,
        padding: 6,
    },
    mineBody: {
        flex: 1,
    }
    
});

module.exports = styles;