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
    mineHeader: {
        height: 160,
        width: width,
        backgroundColor: '#45aa9e',
        flexDirection: 'row',
    },
    viewpager: {
        width: width,
        height: 160,
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
        justifyContent: 'center',
    },
    homeFormRowMidItem: {
        fontSize: 14,
        marginTop: -10,
        height: 80,
        textAlign: 'left',
        borderTopColor: 'white',
        color: '#666'
    },
    homeFormRowRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeFormRowRightImg: {
        width: 15,
        height:18
    },
    homeFormRowRightTxt: {
        fontSize: 10,
        marginTop: 4,
        color: '#498db9'
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