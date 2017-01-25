'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import mainStyles from '../styles/main';

import { mainTab } from '../assets/main';

import Home from './home';
import Team from '../containers/team';
import Line from '../containers/line';
import Chat from '../containers/chat';
import Mine from '../containers/mine';

import LineDetail from '../components/lineDetail';
import ChatDetail from '../components/chatDetail';
import ChatContent from '../components/chatContent';

import BaiduMap from '../components/baiduMap';
import Comment from '../components/comment';
import CommentPublish from '../components/commentPublish';
import CommentReply from '../components/commentReply';
import TeamDetail from '../components/teamDetail';

// import Test from '../components/test';

export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: mainTab[0].key,
        }
    }

    onChangeTab = tab => {

        if( (tab === mainTab[3].key || tab === mainTab[4].key) && !this.props.user.is_logged_in ){
            const { router } = this.props;
            router.resetToLogin();
        } else {
            this.setState({
                selectedTab: tab
            })
        }
    }

    render () {
        return (
            <TabNavigator
                tabBarStyle={mainStyles.tabBarStyle}
                >
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === mainTab[0].key}
                    title={mainTab[0].title}
                    onPress={() => this.onChangeTab(mainTab[0].key)}>
                    <Home {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === mainTab[1].key}
                    title={mainTab[1].title}
                    onPress={() => this.onChangeTab(mainTab[1].key)}>
                    <Team {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === mainTab[2].key}
                    title={mainTab[2].title}
                    onPress={() => this.onChangeTab(mainTab[2].key)}>
                    <Line {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === mainTab[3].key}
                    title={mainTab[3].title}
                    onPress={() => this.onChangeTab(mainTab[3].key)}>
                    <Chat {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === mainTab[4].key}
                    title={mainTab[4].title}
                    onPress={() => this.onChangeTab(mainTab[4].key)}>
                    <Mine {...this.props} />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

