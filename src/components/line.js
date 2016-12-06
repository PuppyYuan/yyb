import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput, ListView } from 'react-native';

import styles from '../styles/line';

export default class Line extends Component {

    constructor(props){
        super(props);
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
        var dataSource = ds.cloneWithRows(this.props.line.data)
        return (
            <View style={styles.container} >
                <View style={styles.navi}>
                    <TouchableHighlight style={styles.navi_btn} onPress= { this.props.handleLogout.bind(this) }>
                        <Text style={styles.navi_btn_txt}>退出</Text>
                    </TouchableHighlight>
                    <Text style={styles.navi_txt} >全部类型</Text>
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
            <TouchableHighlight style={styles.list_item}>
                <View>
                    <Image source={rowData.url} style={styles.list_item_img}/>
                    <Text style={styles.list_item_ttl}>{rowData.title}</Text>
                    <Text style={styles.list_item_desc}>{rowData.desc}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    componentDidMount = () => {
        this.props.lineList();
    }
}
