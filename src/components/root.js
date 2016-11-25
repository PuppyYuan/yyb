import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';
import Router from '../configs/router';
import { login } from '../actions/user';

import Login from '../components/login';
import Line from '../components/line';

let initialRoute = {
    name: 'login',
    page: Login
}

class Root extends Component {
    constructor(props){
        super(props);
        if(props.is_logged_in){
            initialRoute = {
                name: 'line',
                page: Line
            }
        }
    }

    renderScene({page, name, id, index, props}, navigator) {
        this.router = this.route || new Router(navigator);

        if(page){
            return React.createElement(page, {
                ...props,
                ref: view => this[index] = view,
                router: this.router,
                name, 
                route: {
                    name, id, index
                }
            })
        }
    }

    configureScene(route){
        if(route.sceneConfig){
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render(){
        return (
            <Navigator 
                ref = { view => this.navigator = view }
                initialRoute = { initialRoute }
                configureScene = { this.configureScene.bind(this) }
                renderScene = { this.renderScene.bind(this) }    
            />
        )
    }
}

function select(store){
    return {
        is_logged_in: store.user.is_logged_in
    }
}

export default connect(select)(Root);