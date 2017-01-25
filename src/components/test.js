'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView, TouchableOpacity,
    NativeModules
} from 'react-native';

export default class Test extends Component {

    componentDidMount(){
        NativeModules.TestManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', new Date().getTime());
    }

    render() {

        return (
            <View>

            </View>
        );
    }
}
