'use strict'

import React, {Component} from 'react';
import {View, Text, TextInput, ListView, TouchableOpacity, Image} from 'react-native';

import CustomSwitch from '../widget/CustomSwitch';

import navStyles from '../styles/nav';
import styles from '../styles/team';

var CHATS = [
    {url: require('../images/team/1.jpg'), title: '中午的风', desc: '发起人', date: '2016/12/17'},
    {url: require('../images/team/2.jpg'), title: '天飘', desc: '成员', date: '2016/12/17'},
    {url: require('../images/team/3.jpg'), title: '中午的风', desc: '成员', date: '2016/12/17'},
];


export default class CommentReply extends Component {

    constructor(props) {
        super(props);
        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSourceList: dsList.cloneWithRows(CHATS)
        }
    }

    goBack() {
        const {router} = this.props;
        router.pop();
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity>
                <View style={styles.teamDetailListItem}>
                    <View style={styles.teamDetailListItemLeft}>
                        <Image source={rowData.url} style={styles.teamDetailListItemLeftImg}/>
                    </View>
                    <View style={styles.teamDetailListItemMid}>
                        <View style={styles.teamDetailListItemMidTop}>
                            <Text style={styles.teamDetailListItemMidTopTxt}>{rowData.title}</Text>
                        </View>
                        <View style={styles.teamDetailListItemMidBot}>
                            <Text style={styles.teamDetailListItemMidBotTxt}>{rowData.desc}</Text>
                        </View>
                    </View>
                    <View style={styles.teamDetailListItemRight}>
                        <Text style={styles.teamDetailListItemRightBtn}>关注</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={navStyles.navi}>
                    <TouchableOpacity style={navStyles.navi_left} onPress={this.goBack.bind(this)}>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid}>
                        <CustomSwitch activeText="已确认" inActiveText="未确认" value={true}
                                      onValueChange={value=>alert(value)}/>
                    </View>
                    <View style={navStyles.navi_right}/>
                </View>

                <View style={styles.teamDetailListView}>
                    <View style={styles.teamDetailListDesc}>
                        <Text style={styles.teamDetailListDescTxt}>10人已确认</Text>
                    </View>
                    <ListView style={styles.teamDetailList}
                              dataSource={this.state.dataSourceList}
                              renderRow={this._renderRow}
                    />
                </View>
            </View>
        );
    }
}