'use strict'

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ListView } from 'react-native';

import CustomPicker from '../widget/CustomPicker';

import navStyles from '../styles/nav';
import styles from '../styles/line';

import { lineCondition } from '../assets/line'

export default class Line extends Component {

    constructor(props){
        super(props);

        this.state = {
            pickerItems: lineCondition
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
