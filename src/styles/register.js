'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    registContent: {
        flex: 1,
        alignItems: 'center',
    },
    login_input: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        width: width * 0.9,
        height: width * 0.14,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#eee'
    },
    login_input_img: {
        marginTop: -3,
        width: 15,
        height: 18,
        marginLeft: width * 0.05,
        marginRight: width * 0.02
    },
    login_input_text: {
        flex: 1,
        color: '#999',
        fontSize: 14,
    },
    login_btn: {
        width: width * 0.9,
        height: width * 0.14,
        backgroundColor: '#edf3f1',
        borderRadius: 25,
        justifyContent: 'center',
        marginTop: 15
    },
    login_btn_text: {
        textAlign: 'center',
        color: '#c5c5c5',
        fontSize: 20
    },
    regist_check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: width * 0.8,
        height: width * 0.14,
    },
    regist_protocol: {
        fontSize: 13,
        color: '#45a99e',
        marginBottom: 5,
        marginLeft: -10
    },
    regist_avatar_wrap: {
        width: width,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    regist_avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});

module.exports = styles;