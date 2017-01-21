'use strict';

import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    list_item_desc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 30,
        lineHeight: 20,
        paddingLeft: 15,
        color: '#dedede',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    line_empty_view: {
        height: height / 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    line_empty_view_img: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'contain'
    },
    line_empty_view_txt: {
        marginTop: 10,
        fontSize: 12,
        color: '#999'
    },
    detail_content: {
        flex: 1,
    },
    detail_img: {
        width: width,
        height: width * 0.5,
    },
    detail_ttl: {
        fontSize: 16,
        color: '#666',
        padding: 10,
    },
    detail_block: {
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    detail_sttl: {
        fontSize: 15,
        color: '#999',
        paddingBottom: 10,
    },
    detail_desc: {
        lineHeight: 18,
        fontSize: 14,
        color: '#777'
    },
    detail_btn_group: {
        height: 40,
        width: width,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e9e9e9'
    },
    btn_supp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#e9e9e9',
    },
    btn_supp_txt: {
        color: '#999',
        fontSize: 16,
    },
    btn_create: {
        flex: 2,
        backgroundColor: '#ff7515',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_create_txt: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    line_detail_team_wrap: {
        borderTopWidth: 1,
        borderTopColor: '#e9e9e9',
    },
    line_detail_team: {
        width: width,
        height: 80,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
        flexDirection: 'row',
    },
    line_detail_team_left: {
        width: 80,
        height: 60,
    },
    line_detail_team_left_img: {
        width: 80,
        height: 60,
        resizeMode: 'cover',

    },
    line_detail_team_mid: {
        flex: 1,
        height: 60,
        marginLeft: 10,
    },
    line_detail_team_mid_t: {
        flex: 2,
    },
    line_detail_team_mid_t_txt: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
    },
    line_detail_team_mid_b: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    line_detail_team_mid_b_img: {
        width: 21,
        height: 18,
        resizeMode: 'cover',
        marginRight: 4,
    },
    line_detail_team_mid_b_txt: {
        fontSize: 12,
        color: '#999',
    },
    line_detail_team_right: {
        width: 60,
        height: 60,
    },
    line_detail_team_right_t: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    line_detail_team_right_t_txt: {
        color: '#ff7515'
    },
    line_detail_team_right_b: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    line_detail_team_right_b_img: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ededed',
        resizeMode: 'cover',
    },
    line_detail_nav: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        height: Platform.select({
            ios: 60,
            android: 40,
        }),
        paddingTop: Platform.select({
            ios: 20,
            android: 0,
        })
    },
    line_detail_nav_left: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line_detail_nav_left_txt: {
        color: '#fff',
        textAlign: 'center',
    },
    line_detail_nav_right: {
        flex: 17,
    }
});

module.exports = styles;