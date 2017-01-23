'use strict'

import React, {Component} from 'react';
import {View, Text, TextInput, ListView, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';

import CustomSwitch from '../widget/CustomSwitch';

import navStyles from '../styles/nav';
import styles from '../styles/team';

const CHATS = [
    {url: require('../images/team/1.jpg'), title: '中午的风', desc: '发起人', date: '2016/12/17'},
    {url: require('../images/team/2.jpg'), title: '天飘', desc: '成员', date: '2016/12/17'},
    {url: require('../images/team/3.jpg'), title: '中午的风', desc: '成员', date: '2016/12/17'},
    {url: require('../images/team/1.jpg'), title: '中午的风', desc: '发起人', date: '2016/12/17'},
    {url: require('../images/team/2.jpg'), title: '天飘', desc: '成员', date: '2016/12/17'},
    {url: require('../images/team/3.jpg'), title: '中午的风', desc: '成员', date: '2016/12/17'},
    {url: require('../images/team/1.jpg'), title: '中午的风', desc: '发起人', date: '2016/12/17'},
    {url: require('../images/team/2.jpg'), title: '天飘', desc: '成员', date: '2016/12/17'},
    {url: require('../images/team/3.jpg'), title: '中午的风', desc: '成员', date: '2016/12/17'},
];


export default class CommentReply extends Component {

    constructor(props) {
        super(props);
        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            switchValue: true,
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

    changeTab(value) {
        let x = value ? 0 : Dimensions.get('window').width;
        this.scrollView.scrollTo({x});
    }

    changeScrollView(e) {
        let offsetX = e.nativeEvent.contentOffset.x;
        let width = Dimensions.get('window').width;

        if (offsetX % width === 0) {
            this.setState({
                switchValue: offsetX / width === 0
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={navStyles.navi}>
                    <TouchableOpacity style={navStyles.navi_left} onPress={this.goBack.bind(this)}>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid}>
                        <CustomSwitch activeText="已确认"
                                      inActiveText="未确认"
                                      value={this.state.switchValue}
                                      onValueChange={this.changeTab.bind(this)}/>
                    </View>
                    <View style={navStyles.navi_right}/>
                </View>

                <ScrollView
                    horizontal
                    pagingEnabled
                    ref={(scrollView) => { this.scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    keyboardDismissMode="on-drag"
                    style={[styles.teamDetailListView]}
                    scrollEventThrottle={16}
                    scrollsToTop={false}
                    onScroll={this.changeScrollView.bind(this)}
                >

                    <View style={styles.teamDetailList}>
                        <View style={styles.teamDetailListDesc}>
                            <Text style={styles.teamDetailListDescTxt}>10人已确认</Text>
                        </View>
                        <View style={styles.teamDetailList}>
                            <ListView
                                dataSource={this.state.dataSourceList}
                                renderRow={this._renderRow}
                            />
                        </View>
                    </View>
                    <View style={styles.teamDetailList}>
                        <View style={styles.teamDetailListDesc}>
                            <Text style={styles.teamDetailListDescTxt}>10人未确认</Text>
                        </View>
                        <View style={styles.teamDetailList}>
                            <ListView
                                dataSource={this.state.dataSourceList}
                                renderRow={this._renderRow}
                            />
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}