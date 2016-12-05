'use strict'
// 个人中心

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import styles from '../styles/mine';

export default class Mine extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.mineHeader}></View>
            </View>
        );
    }
}

