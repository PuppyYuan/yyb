import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

export default class LineDetail extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/line/1.jpg')} style={styles.detail_img}/>
                <Text style={styles.detail_ttl}>深圳杨梅坑-东冲海岸线穿越</Text>
                <View style={styles.detail_block}>
                    <Text style={styles.detail_sttl}>简介</Text>
                    <Text style={styles.detail_desc}>杨梅坑位于大亚湾，是一个婚纱摄影的美丽天堂，这里汇聚国内知名婚纱摄影拍摄基地。据称是深圳最美的溪谷。在南澳镇的东北面，位于七娘山脉与老虎坐山之前，有一片长满了杨梅的山丘，山丘下面的村庄就叫做“杨梅坑村”。</Text>
                </View>
                <View style={styles.detail_block}>
                    <Text style={styles.detail_sttl}>重要提示</Text>
                    <Text style={styles.detail_desc}>杨梅坑位于大亚湾，是一个婚纱摄影的美丽天堂，这里汇聚国内知名婚纱摄影拍摄基地。据称是深圳最美的溪谷。在南澳镇的东北面，位于七娘山脉与老虎坐山之前，有一片长满了杨梅的山丘，山丘下面的村庄就叫做“杨梅坑村”。</Text>
                </View>

                <View style={styles.detail_btn_group}>
                    
                    <TouchableHighlight style={styles.btn_supp}>
                        <Text>点赞</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btn_supp}>
                        <Text>评论</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btn_create}>
                        <Text style={styles.btn_create_txt}>创建队伍</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    detail_img: {
        width: width * 0.96, 
        height: width * 0.5,
        margin: width * 0.02
    },
    detail_ttl: {
        fontSize: 16,
        color: '#666',
        height: 30,
        lineHeight: 30,
        paddingLeft: width * 0.02
    },
    detail_block: {
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        margin: width * 0.02,
        marginBottom: 0,
        paddingBottom: 15,
        width: width * 0.96
    },
    detail_sttl: {
        fontSize: 12,
        color: '#bbb',
        height: 30,
        lineHeight: 30,
        marginBottom: 15
    },
    detail_desc: {
        lineHeight: 18,
        fontSize: 12,
        color: '#888'
    },
    detail_btn_group: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f9f9f9'
    },
    btn_supp: {
        flex: 1
    },
    btn_create: {
        flex: 2,
        backgroundColor: '#ff7515',
        height: 50
    },
    btn_create_txt: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        lineHeight: 35
    }
});