'use strict'

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ListView } from 'react-native';

import CustomPicker from '../widget/CustomPicker';

import GiftedListView from 'react-native-gifted-listview';

import CustomListView from '../widget/CustomListView';

import navStyles from '../styles/nav';
import styles from '../styles/line';

import { lineCondition, lineData } from '../assets/line'

export default class Line extends Component {

    constructor(props){
        super(props);

        this.state = {
            pickerItems: lineCondition,
        }
    }

    shouldComponentUpdate (nextProps, nextState) {

        if(nextProps.user.is_logged_in != this.props.user.is_logged_in && !nextProps.user.is_logged_in){
            this.resetToLogin();
            return false;
        }

        return true;
    }

    resetToLogin () {
        const { router } = this.props;
        router.resetToLogin();
    }

    toLineDetail(id){
        const { router } = this.props;
        router.toLineDetail({line_id: id})
    }

    onRefresh(){
        this.props.lineList();
    }

    render() {

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

                <CustomListView
                    onRefresh={this.onRefresh.bind(this)}
                    rows={this.props.line.lines}
                    firstLoad={true}
                    isFetch={this.props.line.is_fetching}
                    renderRow={this._renderRow}
                />

            </View>
        );
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity onPress={this.toLineDetail.bind(this, rowData.id)}>
                <View  style={styles.list_item}>
                    <Image source={rowData.url} style={styles.list_item_img}/>
                    <Text style={styles.list_item_ttl}>{rowData.title}</Text>
                    <Text style={styles.list_item_desc}>{rowData.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderEmptyView(){
        return (
            <View style={styles.line_empty_view}>
                <Image source={require('../images/icon_search_empty.png')} style={styles.line_empty_view_img}/>
                <Text style={styles.line_empty_view_txt}>换个条件试试</Text>
            </View>
        );
    }
}
