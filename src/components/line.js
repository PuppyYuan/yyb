import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ListView } from 'react-native';

import navStyles from '../styles/nav';
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

                <View style={navStyles.navi}>
                    <TouchableOpacity  style={navStyles.navi_btn} onPress= { this.props.handleLogout.bind(this) }>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <Text style={navStyles.navi_txt} >全部类型</Text>
                    <View style={navStyles.navi_btn} />
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
