'use strict'

import React from 'react';
import { ListView } from 'react-native';
import * as LINE_ACTIONS from '../constants/line';

const initialState = {
    lines: {},
    status: null
}

const dataBlob = [];
dataBlob.push({url: require('../images/line/1.jpg'), title: '广西桂林', desc: '#旅游'});
dataBlob.push({url: require('../images/line/2.jpg'), title: '戈壁滩沙漠骑行', desc: '#骑行'});
dataBlob.push({url: require('../images/line/3.jpg'), title: '迈阿密海滩度假', desc: '#度假'});
dataBlob.push({url: require('../images/line/4.jpg'), title: '泰姬陵皇宫观光', desc: '#旅游'});
dataBlob.push({url: require('../images/line/5.jpg'), title: '尼亚加拉大瀑布', desc: '#冒险'});

export default function line(state= initialState, action) {
    switch (action.type) {
        case LINE_ACTIONS.LINE_LIST_DOING:
            return {
                ...state,
                lines: {},
                status: 'doing'
            };
        case LINE_ACTIONS.LINE_LIST_SUC:
            
            return {
                ...state,
                data: dataBlob,
                status: 'done'
            };
        case LINE_ACTIONS.LINE_LIST_FAIL:
            return {
                ...state,
                lines: {},
                status: null
            };
        case LINE_ACTIONS.LINE_LIST_ERROR:
            return {
                ...state,
                lines: {},
                status: null
            };
        default:
            return state;
    }
}