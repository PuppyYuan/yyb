import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';
import Router from '../configs/router';
import { login } from '../actions/user';

import Login from '../containers/login';
import Line from '../containers/line';

class Root extends Component {
    constructor(props){
        super(props);       
    }

    renderScene(route, navigator) {
        
        return <route.component 
                    router= { this.router || new Router(navigator)} 
                    {...route.passProps}
                />
    }

    initialRoute = () => {

        if(this.props.is_logged_in){
            return { name: 'line', component: Line, index: 0 }
        }
        return { name: 'login', component: Login, index: 0 }
    }

    configureScene = route => {
        if(route.sceneConfig){
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (
            <Navigator 
                ref = { view => this.navigator = view }
                initialRoute = { this.initialRoute() }
                configureScene = { this.configureScene }
                renderScene = { this.renderScene }    
            />
        )
    }
}

const mapStateToProps = (state) => {  
  return { is_logged_in: state.user.is_logged_in }
}

export default connect(mapStateToProps)(Root);