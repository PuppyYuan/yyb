'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render () {
        // 首页 线路召集 线路
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Text>I am home</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    badgeText="2"
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Text>I am profile</Text>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

