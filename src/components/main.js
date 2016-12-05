'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import mainStyles from '../styles/main';

import Home from '../components/home';
import Line from '../containers/line';
import Mine from '../components/mine';

export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            tabTitle: ['首页', '线路召集', '线路', '聊天', '我']
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
                    selected={this.state.selectedTab === 'home'}
                    title={this.state.tabTitle[0]}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === 'join'}
                    title={this.state.tabTitle[1]}
                    onPress={() => this.setState({ selectedTab: 'join' })}>
                    <Text>线路召集</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === 'line'}
                    title={this.state.tabTitle[2]}
                    onPress={() => this.setState({ selectedTab: 'line' })}>
                    <Line {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === 'chat'}
                    title={this.state.tabTitle[3]}
                    onPress={() => this.setState({ selectedTab: 'chat' })}>
                    <Text>聊天</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={mainStyles.tabBarTitleStyle}
                    selectedTitleStyle={mainStyles.tabBarSelectedTitleStyle}
                    selected={this.state.selectedTab === 'mine'}
                    title={this.state.tabTitle[4]}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <Mine/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

