'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../stores/index';

let store = configureStore();

import Root from './root';

export default class App extends Component {

    render () {
        return (
            <Provider store={ configureStore() }>
                <Root/>
            </Provider>
        )
    }
}