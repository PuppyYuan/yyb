'use strict'
// 个人中心

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import styles from '../styles/mine';

import MineActivity from './mineActivity';
import MineInterest from './mineInterest';
import MineFocus from './mineFocus';

export default class Mine extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.mineHeader}>
                    <View style={styles.mineHeaderLeft}>
                        <Image source={require('../images/photo.jpg')}  style={styles.mineHeaderLeftImg}/>
                    </View>
                    <View style={styles.mineHeaderMid}>
                        <View style={styles.mineHeaderMidTop}>
                            <Text style={styles.mineHeaderMidTopTxt}>弹头008</Text>
                        </View>
                        <View style={styles.mineHeaderMidBot}>
                            <Text style={styles.mineHeaderMidBotNum}>4</Text>
                            <Text style={styles.mineHeaderMidBotTxt}>关注</Text>
                            <Text style={[styles.mineHeaderMidBotNum, {marginLeft: 10}]}>0</Text>
                            <Text style={styles.mineHeaderMidBotTxt}>粉丝</Text>
                        </View>
                    </View>
                    <View style={styles.mineHeaderRight}>
                        <View style={styles.mineHeaderRightTop}>
                            <Image source={require('../images/setting.png')} style={styles.mineHeaderRightTopImg}/>
                        </View>
                        <View style={styles.mineHeaderRightMid}></View>
                        <View style={styles.mineHeaderRightBot}>
                            <Text style={styles.mineHeaderRightBotBtn}>个人信息</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mineBody}>
                    <ScrollableTabView
                        tabBarTextStyle={{color: '#999'}}
                        tabBarActiveTextColor={'#000'}
                        tabBarUnderlineStyle={{height: 2, backgroundColor: '#76c2b9'}}
                        tabBarBackgroundColor={'#f6f6f6'}
                        renderTabBar={() =>
                            <DefaultTabBar style={{height: 40}} tabStyle={{paddingBottom: 0}} />}
                        >
                        
                        <MineActivity tabLabel="活动" />
                        <MineInterest tabLabel="收藏" />
                        <MineFocus tabLabel="关注"/>
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

