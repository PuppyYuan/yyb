import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput, ListView } from 'react-native';

import styles from '../styles/line';

export default class Line extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows())
        };
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        if(nextProps.is_logged_in != this.props.is_logged_in && !nextProps.is_logged_in){
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
        return (
            <View style={styles.container} >
                <View style={styles.navi}>
                    <TouchableHighlight style={styles.navi_btn} onPress= { this.props.handleLogout.bind(this) }>
                        <Text style={styles.navi_btn_txt}>退出</Text>
                    </TouchableHighlight>
                    <Text style={styles.navi_txt} >全部类型</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableHighlight style={styles.list_item}>
                <View>
                    <Image source={rowData.url} style={styles.list_item_img}/>
                    <Text style={styles.list_item_ttl}>{rowData.title}</Text>
                    <Text style={styles.list_item_desc}>{rowData.desc}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    _genRows = () => {
        const dataBlob = [];
        dataBlob.push({url: require('../images/line/1.jpg'), title: '广西桂林', desc: '#旅游'});
        dataBlob.push({url: require('../images/line/2.jpg'), title: '戈壁滩沙漠骑行', desc: '#骑行'});
        dataBlob.push({url: require('../images/line/3.jpg'), title: '迈阿密海滩度假', desc: '#度假'});
        dataBlob.push({url: require('../images/line/4.jpg'), title: '泰姬陵皇宫观光', desc: '#旅游'});
        dataBlob.push({url: require('../images/line/5.jpg'), title: '尼亚加拉大瀑布', desc: '#冒险'});
        return dataBlob;
    }

    componentWillMount = () => {
        
    }
}
