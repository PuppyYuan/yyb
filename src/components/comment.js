'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, ListView, TouchableOpacity, Image } from 'react-native';

import navStyles from '../styles/nav';
import styles from '../styles/comment';

var CHATS = [
    {url: require('../images/team/1.jpg'), title: '中午的风', desc: '还可以报名吗？不知道合不合要求，是每个星期都要参加活动吗？', date: '2016/12/17'},
    {url: require('../images/team/2.jpg'), title: '天飘', desc: '请大家报名之后添加一下我的微信，以方便拉进去，谢谢！', date: '2016/12/17'},
    {url: require('../images/team/3.jpg'), title: '中午的风', desc: '回复天飘：还可以报名，加一下微信13537540530', date: '2016/12/17'},
];

export default class Comment extends Component {

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
                <View style={styles.commentListItem}>
                    <View style={styles.commentListItemLeft}>
                        <Image source={rowData.url} style={styles.commentListItemLeftImg}/>
                    </View>
                    <View style={styles.commentListItemRight}>
                        <View style={styles.commentListItemRightTop}>
                            <Text  style={styles.commentListItemRightTopTxtL}>{rowData.title}</Text>
                            <Text  style={styles.commentListItemRightTopTxtR}>{rowData.date}</Text>
                        </View>
                        <View style={styles.commentListItemRightBot}>
                            <Text style={styles.commentListItemMidBotTxt}>{rowData.desc}</Text>
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
                    <TouchableOpacity style={navStyles.navi_left} >
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid} >
                        <Text style={navStyles.navi_mid_txt}>评论(3)</Text>
                    </View>
                    <View style={navStyles.navi_right} >
                        <Text style={navStyles.navi_btn_txt}>写评论</Text>
                    </View>
                </View>

                <View style={styles.commentListView}>
                    <ListView style={styles.commentList}
                              dataSource={this.state.dataSourceList}
                              renderRow={this._renderRow}
                    />
                </View>
            </View>
        );
    }
}