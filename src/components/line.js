'use strict'

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ListView } from 'react-native';

import CustomPicker from '../widget/CustomPicker';

import navStyles from '../styles/nav';
import styles from '../styles/line';

export default class Line extends Component {

    constructor(props){
        super(props);

        this.state = {
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
                ]
            }
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        if(nextProps.user.is_logged_in != this.props.user.is_logged_in && !nextProps.user.is_logged_in){
            this.resetToLogin();
            return false;
        }

        return true;
    }

    resetToLogin = () => {
        const { router } = this.props;
        router.resetToLogin();
    }

    render() {
        if(this.props.line.status === 'done'){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = ds.cloneWithRows(this.props.line.data);
        return (
            <View style={styles.container} >

                <View style={navStyles.navi}>
                    <TouchableOpacity  style={navStyles.navi_left} onPress= { this.props.handleLogout.bind(this) }>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid} >
                        <CustomPicker
                            options={this.state.pickerItems.category}
                            arrowImg={require('../images/triangle_down_white.png')}
                            tintColor="white"
                            style={{backgroundColor: 'transparent', width: 80,}} />
                    </View>
                    <View style={navStyles.navi_right} />
                </View>
                <ListView
                    dataSource={dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
        }else{
            return <View><Text>加载中…</Text></View>
        }
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity style={styles.list_item}>
                <View>
                    <Image source={rowData.url} style={styles.list_item_img}/>
                    <Text style={styles.list_item_ttl}>{rowData.title}</Text>
                    <Text style={styles.list_item_desc}>{rowData.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount = () => {
        this.props.lineList();
    }
}
