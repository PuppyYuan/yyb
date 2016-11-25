'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../stores/index';

let store = configureStore();

import Root from './root';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loading: true,
            store: configureStore( () => {this.setState({is_loading: false})} )
        }
    }

    render () {
        if(this.state.is_loading){
            console.log('loading app');
            return null;
        }

        return (
            <Provider store={ this.state.store }>
                <Root/>
            </Provider>
        )
    }
}