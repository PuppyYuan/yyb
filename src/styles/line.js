'use strict';

import {StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    list_item_desc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 30,
        lineHeight: 20,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    line_empty_view: {
        height: height / 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    line_empty_view_img: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'contain'
    },
    line_empty_view_txt: {
        marginTop: 10,
        fontSize: 12,
        color: '#999'
    },
    detail_img: {
        width: width * 0.96,
        height: width * 0.5,
        margin: width * 0.02
    },
    detail_ttl: {
        fontSize: 16,
        color: '#666',
        height: 30,
        lineHeight: 30,
        paddingLeft: width * 0.02
    },
    detail_block: {
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        margin: width * 0.02,
        marginBottom: 0,
        paddingBottom: 15,
        width: width * 0.96
    },
    detail_sttl: {
        fontSize: 12,
        color: '#bbb',
        height: 30,
        lineHeight: 30,
        marginBottom: 15
    },
    detail_desc: {
        lineHeight: 18,
        fontSize: 12,
        color: '#888'
    },
    detail_btn_group: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f9f9f9'
    },
    btn_supp: {
        flex: 1
    },
    btn_create: {
        flex: 2,
        backgroundColor: '#ff7515',
        height: 50
    },
    btn_create_txt: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        lineHeight: 35
    }
});

module.exports = styles;