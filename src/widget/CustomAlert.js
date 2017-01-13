'use strict'

import React, { Component } from 'react';
import { Alert, AlertIOS, Platform } from 'react-native';

export default class CustomAlert {

    static alert(title: ?string, message: ?string){
        if (Platform.OS === 'android') {
            Alert.alert(title, message)
        } else {
            AlertIOS.alert(title, message)
        }
    }
}