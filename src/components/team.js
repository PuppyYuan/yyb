'use strict'
// 线路召集

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TouchableOpacity,
TextInput, ScrollView, Picker, ListView} from 'react-native';

import ViewPager from 'react-native-viewpager';
import CustomPicker from '../widget/CustomPicker';

import styles from '../styles/team';

var IMGS = [
  require('../images/line/1.jpg'),
  require('../images/line/2.jpg'),
  require('../images/line/3.jpg'),
  require('../images/line/4.jpg'),
  require('../images/line/5.jpg')
];

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

export default class Team extends Component {

    constructor(props) {
        super(props);

        const dsPager = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            dataSourcePager: dsPager.cloneWithPages(IMGS),
            dataSourceList: dsList.cloneWithRows(IMGS1),
            pickerItems: {
                category: [
                    {key: "0", label: "全部类型"},
                    {key: "1", label: "休闲户外"},
                    {key: "2", label: "山野"},
                    {key: "3", label: "旅行"},
                    {key: "4", label: "骑行"},
                    {key: "5", label: "潜水"},
                    {key: "6", label: "自驾"},
                    {key: "7", label: "跑步"},
                    {key: "8", label: "水上运动"},
                    {key: "9", label: "技术攀登"},
                    {key: "10", label: "日常锻炼"},
                    {key: "11", label: "极限运动"},
                    {key: "12", label: "滑雪"},
                    {key: "13", label: "公益"},
                ],
                time: [
                    {key: "0", label: "即将出发"},
                    {key: "1", label: "最新发布"},
                ]
            }
        }

    }

    _renderPage(data, pageID){
        return (
        <Image
            source={ data }
            style={styles.viewpage} />
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
                            <Text  style={styles.teamListItemMidTopTxt}>{rowData.title}</Text>
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

    render () {

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
                        style={styles.teamConditionItem} />
                    <CustomPicker
                        options={this.state.pickerItems.time}
                        style={styles.teamConditionItem} />

                </View>

                <ListView style={styles.teamList}
                          dataSource={this.state.dataSourceList}
                          renderRow={this._renderRow}
                />

            </View>
        )
    }
}