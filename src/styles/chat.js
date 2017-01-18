'use strict';

import {StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f6',
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
        marginTop: 10,
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
        backgroundColor: '#f9f9f9',
    },
    chatContentTextInputStyle: {
        fontSize: 14,
        lineHeight: 14,
        marginLeft: 8,
    },
    chatContentContainerStyle: {
        height: 40,
        justifyContent: 'center',
    },
    chatContentTextStyle: {
        color: '#45a99e',
        fontSize: 14,
        fontWeight: '400',
    },
    chatContentWrapperStyle: {
        height: 20,
        borderRadius: 10,
    }
});

const messageTextStyle = {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
};


const messageTextTextStyles = StyleSheet.create({
    left: {
        color: '#333',
        ...messageTextStyle,
    },
    right: {
        color: 'white',
        ...messageTextStyle,
    },
});

const messageTextLinkStyles = StyleSheet.create({
    left: {
        color: '#333',
        textDecorationLine: 'underline',
    },
    right: {
        color: 'white',
        textDecorationLine: 'underline',
    },
});

const bubbleWrapperStyle = StyleSheet.create({
    left: {
        borderRadius: 6,
        backgroundColor: '#efefef',
        marginRight: 60,
        minHeight: 20,
        justifyContent: 'flex-end',
    },
    right: {
        borderRadius: 6,
        backgroundColor: '#45a99e',
        marginLeft: 60,
        minHeight: 20,
        justifyContent: 'flex-end',
    },
});

export { styles, messageTextTextStyles, messageTextLinkStyles, bubbleWrapperStyle };