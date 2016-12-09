'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, ListView, TouchableOpacity, Image } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import ChatContent from './chatContent';

import styles from '../styles/chat';


export default class ChatDetail extends Component {

    constructor(props) {
        super(props);
    }

    
    render () {
        return (
            <View style={styles.container} >
                <View style={styles.navi}>
                    <TouchableOpacity>
                        <View style={styles.navi_btn}>
                            <Text style={styles.navi_btn_txt}>&lt;返回</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.navi_txt} >东西冲24号14点出发讨论组</Text>
                    <View style={styles.navi_btn} />
                </View>
                <View style={styles.chatDesc}>
                    <View style={styles.chatDescRow}>
                        <Text style={styles.chatDescRowLabel}>集合地点：</Text>
                        <Text style={styles.chatDescRowCont}>深大北门桥底下</Text>
                    </View>
                    <View style={styles.chatDescRow}>
                        <Text style={styles.chatDescRowLabel}>出发时间：</Text>
                        <Text style={styles.chatDescRowCont}>09/24 09:00</Text>
                    </View>
                    <View style={styles.chatDescRow}>
                        <Text style={styles.chatDescRowLabel}>是否包车：</Text>
                        <Text style={styles.chatDescRowCont}>是（司机电话：135xxxxxxx）</Text>
                    </View>
                </View>
                <View style={styles.chatContent}>
                    <ScrollableTabView
                        tabBarTextStyle={{color: '#999'}}
                        tabBarActiveTextColor={'#000'}
                        tabBarUnderlineStyle={{height: 2, backgroundColor: '#76c2b9'}}
                        tabBarBackgroundColor={'#f6f6f6'}
                        >
                        
                        <ChatContent tabLabel="聊天" />
                        <View tabLabel="成员" />
                    
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}