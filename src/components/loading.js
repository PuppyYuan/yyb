import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
} from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

export default class Loading extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Image 
                    source={require('../images/loading.png')} 
                    style={{width: width, height: height}}/>
            </View>
        );
    }
}