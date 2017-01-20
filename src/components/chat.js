'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, ListView, TouchableOpacity, Image } from 'react-native';

import navStyles from '../styles/nav';
import { styles } from '../styles/chat';

import { chatList } from '../assets/chat';

import CustomListView from '../widget/CustomListView';

export default class ChatPage extends Component {

    constructor(props) {
        super(props);
        const dsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            dataSourceList: dsList.cloneWithRows(chatList)
        }
    }

    toChatDetail(id){
        const { router } = this.props;
        router.toChatDetail({chat_id: id});
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity onPress={this.toChatDetail.bind(this,rowData.id)}>
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
                    <View style={navStyles.navi_left} />
                    <View style={navStyles.navi_mid} >
                        <Text style={navStyles.navi_mid_txt}>聊天({this.props.chat.chats.length})</Text>
                    </View>
                    <View style={navStyles.navi_right} />
                </View>

                <View style={styles.searchView}>
                    <TextInput 
                        placeholder="搜索" 
                        placeholderTextColor="#bbb" 
                        underlineColorAndroid="#fff" 
                        multiline={false}
                        maxLength={20}
                        style={styles.searchViewIpt}
                        onChangeText = { this.props.filter_chat.bind(this) }
                        />
                </View>
                <View style={styles.chatListView}  >

                    <CustomListView
                        rows={this.props.chat.chats}
                        renderRow={this._renderRow}
                        firstLoad={true}
                        isRefreshing={this.props.chat.is_refreshing}
                        onRefresh={this.props.refresh_chat}
                        isLoading={this.props.chat.is_loading}
                        onLoad={this.props.load_chat}
                    />
                </View>
            </View>
        );
    }
}