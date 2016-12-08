'use strict'
// 个人中心

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import styles from '../styles/mine';

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
            </View>
        );
    }
}

