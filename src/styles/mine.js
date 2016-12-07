'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    mineHeader: {
        height: 150,
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
    mineHeaderRight: {
        flex: 1,
        backgroundColor: 'purple'
    }
});

module.exports = styles;