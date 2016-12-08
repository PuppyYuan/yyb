'use strict'
// 个人中心收藏

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ListView} from 'react-native';

import styles from '../styles/mine';
import teamStyles from '../styles/team';

var IMGS1 = [
  {url: require('../images/team/1.jpg'), title: '2016年10月15日至21日稻城亚丁自驾游', date: '2016.10.15 共0天'},
  {url: require('../images/team/2.jpg'), title: '[清洁山野]白云章环线（2016年10月16日）', date: '2016.10.15 共0天'},
  {url: require('../images/team/3.jpg'), title: '10月16日罗浮山休闲伴侣', date: '2016.10.15 共0天'},
  {url: require('../images/team/4.jpg'), title: '梧桐山山村-二线关石板线路', date: '2016.10.15 共0天'},
  {url: require('../images/team/5.jpg'), title: '10月16日梧桐山打火锅1天休闲户外', date: '2016.10.15 共0天'},
  {url: require('../images/team/1.jpg'), title: '2016年10月15日至21日稻城亚丁自驾游', date: '2016.10.15 共0天'},
  {url: require('../images/team/2.jpg'), title: '[清洁山野]白云章环线（2016年10月16日）', date: '2016.10.15 共0天'},
  {url: require('../images/team/3.jpg'), title: '10月16日罗浮山休闲伴侣', date: '2016.10.15 共0天'},
  {url: require('../images/team/4.jpg'), title: '梧桐山山村-二线关石板线路', date: '2016.10.15 共0天'},
  {url: require('../images/team/5.jpg'), title: '10月16日梧桐山打火锅1天休闲户外', date: '2016.10.15 共0天'},
];

export default class MineInterest extends Component {
    constructor(props){
        super(props);

        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            dataSourceList: dsList.cloneWithRows(IMGS1)
        }
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity>
                <View style={teamStyles.teamListItem}>
                    <View style={teamStyles.teamListItemLeft}>
                        <Image source={rowData.url} style={teamStyles.teamListItemLeftImg}/>
                    </View>                    
                    <View style={teamStyles.teamListItemMid}>
                        <View style={teamStyles.teamListItemMidTop}>
                            <Text  style={teamStyles.teamListItemMidTopTxt}>{rowData.title}</Text>
                        </View>
                        <View style={teamStyles.teamListItemMidBot}>
                            <Image source={require('../images/calendar.png')} style={teamStyles.teamListItemMidBotImg}/>
                            <Text style={teamStyles.teamListItemMidBotTxt}>{rowData.date}</Text>
                        </View>
                    </View>
                    <View style={teamStyles.teamListItemRight}>
                        <Text style={teamStyles.teamListItemRightTop}>已结束</Text>
                        <View style={teamStyles.teamListItemRightBot}>
                            <Image source={require('../images/portrait.jpg')} style={teamStyles.teamListItemRightBotImg}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView style={teamStyles.teamList}
                        dataSource={this.state.dataSourceList}
                        renderRow={this._renderRow}
                    />
            </View>
        );
    }

}