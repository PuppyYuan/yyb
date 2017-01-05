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
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    teamConditionItem: {
        width: width / 3 - 15,
        marginRight: 15,
        height: 40,
        backgroundColor: 'transparent'
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
    },
    teamDetailListView: {
        flex: 1,
    },
    teamDetailListDesc: {
        height: 40,
        backgroundColor: '#f6f8f6',
    },
    teamDetailListDescTxt: {
        lineHeight: 40,
        paddingLeft: 15,
        color: '#c1c1c1',
    },
    teamDetailList: {
        flex: 1,
    },
    teamDetailListItem: {
        flex: 1,
        height: 80,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        flexDirection: 'row',
    },
    teamDetailListItemLeft: {
        width: 40,
        height: 60,
        justifyContent: 'center',
    },
    teamDetailListItemLeftImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    teamDetailListItemMid: {
        flex: 3,
        marginLeft: 6,
    },
    teamDetailListItemMidTop: {
        flex: 1,
        justifyContent: 'center',
    },
    teamDetailListItemMidTopTxt: {
        color: '#666',
    },
    teamDetailListItemMidBot: {
        flex: 1,
        justifyContent: 'center',
    },
    teamDetailListItemMidBotTxt: {
        color: '#999',
    },
    teamDetailListItemRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    teamDetailListItemRightBtn: {
        color: '#45a99e',
        borderColor: '#45a99e',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        padding: 4,
        width: 60,
    }

});

module.exports = styles;