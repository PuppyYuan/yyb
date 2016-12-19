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
    commentListView: {
        flex: 1,
    },
    commentList: {
        flex: 1,
        backgroundColor: 'white',
    },
    commentListItem: {
        flex: 1,
        height: 80,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        flexDirection: 'row',
    },
    commentListItemLeft: {
        width: 40,
        height: 60,
        justifyContent: 'center',
    },
    commentListItemLeftImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    commentListItemRight: {
        flex: 4,
        marginLeft: 6,
    },
    commentListItemRightTop: {
        flex: 1,
        flexDirection: 'row',
    },
    commentListItemRightTopTxtL: {
        color: '#45a99e',
        textAlign: 'left',
        fontSize: 12,
        flex: 1,
    },
    commentListItemRightTopTxtR: {
        color: '#ddd',
        textAlign: 'right',
        fontSize: 12,
        flex: 1,
    },
    commentListItemRightBot: {
        flex: 2,
    },
    commentListItemMidBotTxt: {
        color: '#999',
    },
    replyView: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
    },
    replyViewTxt: {
        flex: 1,
        fontSize: 13,
        lineHeight: 30,
        justifyContent: 'flex-start',
    }
});

module.exports = styles;