import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput, ListView } from 'react-native';

import { connect } from 'react-redux';

import { logout } from '../actions/user'; 

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

class Line extends Component {

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

    handleLogout = () => {
        this.props.dispatch(logout());
    }

    resetToLogin = () => {
        const { router } = this.props;
        router.resetToLogin();
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.navi}>
                    <TouchableHighlight style={styles.navi_btn} onPress= { this.handleLogout.bind(this) }>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    navi: {
        width: width,
        height: 40, 
        backgroundColor: '#45a99e',
        flexDirection: 'row'
    },
    navi_txt: {
        width: width * 0.8,
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
    },
    navi_btn: {
        width: width * 0.1,
        height: 40,
    },
    navi_btn_txt: {
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
    },
    list_item: {
        alignItems: 'center',
        width: width,
        height: width * 0.5,
        marginTop: width * 0.01
    },
    list_item_img: {
        width: width * 0.98, 
        height: width * 0.5
    },
    list_item_ttl: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        height: 30,
        lineHeight: 30,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 16
    },
    list_item_desc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 30,
        lineHeight: 20,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 14
    }
});

function select(store){
    return {
        is_logged_in: store.user.is_logged_in,
        user: store.user.user,
        status: store.user.status
    }
}

export default connect(select)(Line);