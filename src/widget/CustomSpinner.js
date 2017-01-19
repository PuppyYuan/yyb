'use strict'

import React, {Component} from 'react';
import {View, ActivityIndicator, ProgressBarAndroid, Platform, Text} from 'react-native';

export default class CustomSpinner extends Component {

    constructor(props) {
        super(props);
    }

    getSpinner() {
        if (Platform.OS === 'android') {
            return (
                <ProgressBarAndroid
                    style={{
                        height: 20,
                      }}
                    styleAttr="Inverse"
                    {...this.props}
                />
            );
        } else {
            return (
                <ActivityIndicator
                    animating={true}
                    size="small"
                    {...this.props}
                />
            );
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                {this.getSpinner()}
                {this.props.tips ? <Text style={{color: '#999'}}>{this.props.tips}</Text> : null}
            </View>
        )
    }

}