'use strict';

import {StyleSheet, Dimensions, Image } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f6',
    },
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
    searchView: {
        width: width,
        height: 40,
        justifyContent: 'center',
    },
    searchViewIpt: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 14,
        backgroundColor: 'white',
        color: '#666'
    },
    chatListView: {
        marginTop: 20,
        flex: 1,
    },
    chatList: {
        flex: 1,
        backgroundColor: 'white',
    },
    chatListItem: {
        flex: 1,
        height: 80,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        flexDirection: 'row',
    },
    chatListItemLeft: {
        width: 60,
        height: 60,
    },
    chatListItemLeftImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    chatListItemMid: {
        flex: 3,
        marginLeft: 6,
    },
    chatListItemMidTop: {
        flex: 2,
    },
    chatListItemMidTopTxt: {
        fontSize: 14,
        color: '#333',
    },
    chatListItemMidBotTxt: {
        fontSize: 14,
        color: '#999',
    },
    chatListItemMidBot: {
        flex: 1,
    },
    chatListItemRight: {
        flex: 1,
    },
    chatListItemRightTop: {
        flex: 2,
    },
    teamListItemRightTopTxt: {
        color: '#999',
        textAlign: 'right',
        fontSize: 12,
    },
    chatListItemRightBot: {
        flex: 1,
        alignItems: 'flex-end'
    },
    chatListItemRightBotIc: {
        width: 15,
        height: 15,
    },
    chatDesc: {
        width: width,
        height: 90,
        backgroundColor: '#45a99e',
    },
    chatDescRow: {
        width: width,
        height: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    chatDescRowLabel: {
        flex: 1,
        paddingLeft: 10,
        color: 'white',
    },
    chatDescRowCont: {
        flex: 3,
        color: 'white',
    },
    chatContent: {
        flex: 1,
    }
});

module.exports = styles;