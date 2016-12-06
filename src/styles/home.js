'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    mineHeader: {
        height: 160,
        width: width,
        backgroundColor: '#45aa9e'
    },
    viewpager: {
        width: width,
        height: 160,
        marginTop: 10
    },
    viewpage: {
        width: width,
        height: 160
    },
    homeForm: {
        flex: 1,
        padding: 10,
    },
    homeFormRow: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        height: 60,
        flexDirection: 'row'
    },
    homeFormRowLeft: {
        flex: 2,
        justifyContent: 'center'
    },
    homeFormRowLeftTxt: {
        color: '#498db9',
        fontWeight: 'bold'
    },
    homeFormRowMid: {
        flex: 3,
        justifyContent: 'center'
    },
    homeFormRowRight: {
        flex: 1,
        justifyContent: 'center'
    },
    homeFormBtn: {
        width: width - 20,
        height: 40,
        backgroundColor: '#ff9713',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 8,
    },
    homeFormBtnTxt: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

module.exports = styles;