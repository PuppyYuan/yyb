'use strict'

import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions, View, Switch} from 'react-native';

import CustomPicker from '../widget/CustomPicker';
import CustomSwitch from '../widget/CustomSwitch';

export default class Test extends  Component {

    constructor(props){
        super(props);
        this.state = {
            falseSwitchIsOn: false,
        }
    }

    render() {

        return (
            <View style={{flex: 1, paddingTop: 20, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <CustomSwitch activeText="已确认" inActiveText="未确认" value={true} onValueChange={value=>alert(value)}/>

            </View>

        )
    }

}