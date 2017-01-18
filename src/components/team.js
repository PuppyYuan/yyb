'use strict'
// 线路召集

import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ListView
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import CustomPicker from '../widget/CustomPicker';

import styles from '../styles/team';

import { teamAd, teamList, teamCondition } from '../assets/team';

export default class Team extends Component {

    constructor(props) {
        super(props);

        const dsPager = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSourcePager: dsPager.cloneWithPages(teamAd),
            dataSourceList: dsList.cloneWithRows(teamList),
            pickerItems: teamCondition
        }

    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={ data }
                style={styles.viewpage}/>
        );
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity>
                <View style={styles.teamListItem}>
                    <View style={styles.teamListItemLeft}>
                        <Image source={rowData.url} style={styles.teamListItemLeftImg}/>
                    </View>
                    <View style={styles.teamListItemMid}>
                        <View style={styles.teamListItemMidTop}>
                            <Text style={styles.teamListItemMidTopTxt}>{rowData.title}</Text>
                        </View>
                        <View style={styles.teamListItemMidBot}>
                            <Image source={require('../images/calendar.png')} style={styles.teamListItemMidBotImg}/>
                            <Text style={styles.teamListItemMidBotTxt}>{rowData.date}</Text>
                        </View>
                    </View>
                    <View style={styles.teamListItemRight}>
                        <Text style={styles.teamListItemRightTop}>已结束</Text>
                        <View style={styles.teamListItemRightBot}>
                            <Image source={require('../images/portrait.jpg')} style={styles.teamListItemRightBotImg}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.viewpager}>
                    <ViewPager
                        style={styles.viewpager}
                        dataSource={this.state.dataSourcePager}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                </View>

                <View style={styles.teamCondition}>
                    <CustomPicker
                        options={this.state.pickerItems.category}
                        style={styles.teamConditionItem}/>
                    <CustomPicker
                        options={this.state.pickerItems.time}
                        style={styles.teamConditionItem}/>
                </View>

                <ListView style={styles.teamList}
                          dataSource={this.state.dataSourceList}
                          renderRow={this._renderRow}
                />

            </View>
        )
    }
}