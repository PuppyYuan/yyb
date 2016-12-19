'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, ListView, TouchableOpacity, Image } from 'react-native';

import navStyles from '../styles/nav';
import styles from '../styles/comment';

export default class CommentReply extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container} >

                <View style={navStyles.navi}>
                    <TouchableOpacity>
                        <View style={navStyles.navi_btn}>
                            <Text style={navStyles.navi_btn_txt}>返回</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={navStyles.navi_txt} >写评论</Text>
                    <View style={navStyles.navi_btn} >
                        <Text style={navStyles.navi_btn_txt}>发布</Text>
                    </View>
                </View>

                <View style={styles.replyView}>
                    <TextInput
                        style={styles.replyViewTxt}
                        placeholder={"回复：天飘"}
                        placeholderTextColor={"#666"}
                        multiline={true}
                    />
                </View>
            </View>
        );
    }
}