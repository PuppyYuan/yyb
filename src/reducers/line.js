'use strict';

import React from 'react';
import * as LineActions from '../constants/line';

import { lineData } from '../assets/line';

const initialState = {
    lines: [],
    refresh_status: null,
    is_refreshing: false,
    is_loading: false,
    load_status: null,
};

export default function line(state= initialState, action) {

    switch (action.type) {
        case LineActions.REFRESH_LINE_DOING:
            return Object.assign({}, state, {refresh_status: 'doing', is_refreshing: true});

        case LineActions.REFRESH_LINE_SUC:
            return {
                ...state,
                refresh_status: 'done',
                is_refreshing: false,
                lines: lineData,
            };

        case LineActions.REFRESH_LINE_FAIL:
            return Object.assign({}, state, {refresh_status: 'fail', is_refreshing: false});

        case LineActions.REFRESH_LINE_ERROR:
            return Object.assign({}, state, {refresh_status: 'error', is_refreshing: false});

        case LineActions.LOAD_LINE_DOING:
            return Object.assign({}, state, {load_status: 'doing', is_loading: true});

        case LineActions.LOAD_LINE_SUC:
            let data = state.lines.concat([{id: 6, url: require('../images/line/1.jpg'), title: '广西桂林', desc: '#旅游'}], [{id: 7, url: require('../images/line/1.jpg'), title: '广西桂林', desc: '#旅游'}]);

            return {
                ...state,
                load_status: 'done',
                is_loading: false,
                lines: data,
            };

        case LineActions.LOAD_LINE_FAIL:
            return Object.assign({}, state, {load_status: 'fail', is_loading: false});

        case LineActions.LOAD_LINE_ERROR:
            return Object.assign({}, state, {load_status: 'error', is_loading: false});

        default:
            return state;
    }
}