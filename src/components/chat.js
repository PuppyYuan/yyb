'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, ListView, TouchableOpacity, Image } from 'react-native';

import navStyles from '../styles/nav';
import styles from '../styles/chat';

var CHATS = [
  {url: require('../images/team/1.jpg'), title: '日稻城亚丁自驾游讨论组', desc: '[14条]我也去'},
  {url: require('../images/team/2.jpg'), title: '[清洁山野]白云章环线（2016年10月16日）', desc: '[14条]我也去'},
  {url: require('../images/team/3.jpg'), title: '10月16日罗浮山休闲伴侣', desc: '[14条]我也去'},
  {url: require('../images/team/4.jpg'), title: '梧桐山山村-二线关石板线路', desc: '[14条]我也去'},
  {url: require('../images/team/5.jpg'), title: '10月16日梧桐山打火锅1天休闲户外', desc: '[14条]我也去'},
  {url: require('../images/team/1.jpg'), title: '2016年10月15日至21日稻城亚丁自驾游', desc: '[14条]我也去'},
  {url: require('../images/team/2.jpg'), title: '[清洁山野]白云章环线（2016年10月16日）', desc: '[14条]我也去'},
  {url: require('../images/team/3.jpg'), title: '10月16日罗浮山休闲伴侣', desc: '[14条]我也去'},
  {url: require('../images/team/4.jpg'), title: '梧桐山山村-二线关石板线路', desc: '[14条]我也去'},
  {url: require('../images/team/5.jpg'), title: '10月16日梧桐山打火锅1天休闲户外', desc: '[14条]我也去'},
];

export default class Chat extends Component {

    constructor(props) {
        super(props);
        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            dataSourceList: dsList.cloneWithRows(CHATS)
        }
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity>
                <View style={styles.chatListItem}>
                    <View style={styles.chatListItemLeft}>
                        <Image source={rowData.url} style={styles.chatListItemLeftImg}/>
                    </View>                    
                    <View style={styles.chatListItemMid}>
                        <View style={styles.chatListItemMidTop}>
                            <Text  style={styles.chatListItemMidTopTxt}>{rowData.title}</Text>
                        </View>
                        <View style={styles.chatListItemMidBot}>
                            <Text style={styles.chatListItemMidBotTxt}>{rowData.desc}</Text>
                        </View>
                    </View>
                    <View style={styles.chatListItemRight}>
                        <View style={styles.chatListItemRightTop}>
                            <Text style={styles.teamListItemRightTopTxt}>已结束</Text>
                        </View>
                        <View style={styles.chatListItemRightBot}>
                            <Image source={require('../images/ic_nobell.png')} style={styles.chatListItemRightBotIc}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render () {
        return (
            <View style={styles.container} >

                <View style={navStyles.navi}>
                    <TouchableOpacity  style={navStyles.navi_btn}>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <Text style={navStyles.navi_txt} >聊天(3)</Text>
                    <View style={navStyles.navi_btn} />
                </View>

                <View style={styles.searchView}>
                    <TextInput 
                        placeholder="搜索" 
                        placeholderTextColor="#bbb" 
                        underlineColorAndroid="#fff" 
                        multiline={false}
                        maxLength={20}
                        style={styles.searchViewIpt}
                        />
                </View>
                <View style={styles.chatListView}>
                    <ListView style={styles.chatList}
                        dataSource={this.state.dataSourceList}
                        renderRow={this._renderRow}
                    />
                </View>
            </View>
        );
    }
}