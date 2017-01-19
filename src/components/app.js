'use strict'

import React, {Component} from 'react';
import {Dimensions, Image, Animated} from 'react-native';
import {Provider} from 'react-redux';

import configureStore from '../stores/index';

import Root from './root';

const {width, height} = Dimensions.get('window');

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rehydrated: false,
            fadeAnim: new Animated.Value(1),
            store: configureStore(() =>
                Animated.timing(
                    this.state.fadeAnim,
                    {toValue: 0, duration: 100, delay: 1500},
                ).start(() =>
                    this.setState({rehydrated: true})
                ))
        };
    }

    render() {
        if (!this.state.rehydrated) {
            return (
                <Animated.Image
                    source={require('../images/start_logo.png')}
                    style={{width: width, height: height, opacity: this.state.fadeAnim}}/>
            );
        }
        return (
            <Provider store={ this.state.store }>
                <Root/>
            </Provider>
        )
    }
}