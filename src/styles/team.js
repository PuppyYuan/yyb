'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mineHeader: {
        height: 160,
        width: width,
        backgroundColor: '#45aa9e',
        flexDirection: 'row',
    },
    viewpager: {
        width: width,
        height: 160
    },
    viewpage: {
        width: width,
        height: 160
    },
    teamCondition: {
        width: width,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    teamList: {
        paddingTop: 6,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#f3f3f3',
        backgroundColor: '#f6f6f6',
    },
    teamListItem: {
        flex: 1,
        height: 80,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    teamListItemLeft: {
        width: 80,
        height: 60,
    },
    teamListItemLeftImg: {
        width: 80,
        height: 60,
    },
    teamListItemMid: {
        paddingHorizontal: 10,
        flex: 3
    },
    teamListItemMidTop: {
        flex: 2
    },
    teamListItemMidTopTxt: {
        color: '#666',
        lineHeight: 20,
        fontSize: 14,
    },
    teamListItemMidBot: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    teamListItemMidBotImg: {
        width: 19,
        height: 17,
    },
    teamListItemMidBotTxt: {
        lineHeight: 20,
        marginLeft: 10,
        color: '#999',
        fontSize: 12,
    },
    teamListItemRight: {
        flex: 1,
        justifyContent: 'center'
    },
    teamListItemRightTop: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 20,
    },
    teamListItemRightBot: {
        flex: 1,
        alignItems: 'center'
    },
    teamListItemRightBotImg: {
        width: 30,
        height: 30,
        borderRadius: 15
    }
});

module.exports = styles;