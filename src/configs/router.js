'use strict';
import React, {Navigator} from 'react-native';


// Pages

import Login from '../containers/login';
import Line from '../containers/line';


// Config
const sceneConfig = require('./sceneConfig')

const customFloatFromRight = sceneConfig.customFloatFromRight;


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }


    pop() {
        this.navigator.pop()
    }

    toLogin(props){
        this.push(props, {
            page: Login,
            name: 'login',
            sceneConfig: customFloatFromRight
        })
    }

    toLine(props){
        this.push(props, {
            page: Line,
            name: 'line',
            sceneConfig: customFloatFromRight
        })
    }

    replaceWithHome() {
        this.navigator.popToTop()
    }

    resetToLogin(){
        this.navigator.resetTo({
            name: 'login',
            page: Login,
            //sceneConfig: customFloatFromRight,
        })
    }


}

module.exports = Router

