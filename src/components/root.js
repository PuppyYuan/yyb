'use strict'

import React, {Component} from 'react';
import {Navigator} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Router from '../configs/router';

import Login from '../containers/login';
import Main from '../containers/main';

import TeamDetail from '../components/teamDetail';

import * as LocationActions from '../actions/location';

import Test from '../components/test';

class Root extends Component {
    constructor(props) {
        super(props);
    }

    renderScene = (route, navigator) => {

        return <route.component
            router={ this.router || new Router(navigator)}
            {...route.props}
        />
    };

    initialRoute = () => {
        if (!this.props.user.is_logged_in) {
            return {name: 'login', component: Login, index: 0}
        }
        return {name: 'main', component: Main, index: 0}
    };

    configureScene = route => {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    };

    render() {
        return (
            <Navigator
                ref={ view => this.navigator = view }
                initialRoute={ this.initialRoute() }
                configureScene={ this.configureScene }
                renderScene={ this.renderScene }
            />
        )
    }

    componentDidMount() {
        // this.chat_timer = setInterval(()=>{
        //     console.log("I am going to load chat from server")
        // }, 2000);

        this.props.load_location();
    }

    // 清除加载聊天记录的定时器任务
    componentWillUnMount(){
        this.chat_timer && clearInterval(this.chat_timer);
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LocationActions, dispatch);
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);