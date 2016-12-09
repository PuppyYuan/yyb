'use strict';
import React, {Navigator} from 'react-native';

import Login from '../containers/login';
import Line from '../containers/line';
import Main from '../containers/main';

import * as sceneConfig from './sceneConfig';

const customFloatFromRight = sceneConfig.customFloatFromRight;

class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index ? routesList[routesList.length - 1].index + 1 : 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }

    replace(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index
        route.props = props
        route.index = nextIndex
        this.navigator.replace(route)
    }

    pop() {
        this.navigator.pop()
    }

    toLogin(props){
        this.push(props, {
            component: Login,
            name: 'login',
            sceneConfig: customFloatFromRight
        })
    }

    toLine(props){
        this.push(props, {
            component: Line,
            name: 'line',
            sceneConfig: customFloatFromRight
        })
    }

    toMain = props => {
        this.replace(props, {
            component: Main,
            name: 'main',
            sceneConfig: customFloatFromRight
        })
    }

    replaceWithHome() {
        this.navigator.popToTop()
    }

    resetToLogin(){
        this.navigator.resetTo({
            name: 'login',
            component: Login
        })
    }
}

module.exports = Router

