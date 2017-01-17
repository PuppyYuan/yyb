'use strict'

import React, { Component } from 'react';
import { Dimensions, Image, Animated } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from '../stores/index';

let store = configureStore();

import Root from './root';

const { width, height } = Dimensions.get('window');

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            rehydrated: false,
            fadeAnim: new Animated.Value(1)
        };
    }

    componentWillMount(){
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 0, duration: 200, delay: 2000},
        ).start( ()=>this.setState({rehydrated: true}) );

    }

    render () {
        if(!this.state.rehydrated){
            return (
                <Animated.Image
                    source={require('../images/start_logo.png')}
                    style={{width: width, height: height, opacity: this.state.fadeAnim}}/>
            );
        }
        return (
            <Provider store={ store }>
                <Root/>
            </Provider>
        )
    }
}