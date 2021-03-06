'use strict'

import React from 'react';
import * as ChatAcitons from '../constants/chat';

import {chatList} from '../assets/chat';

const initialState = {
    chats: [],
    refresh_status: null,
    is_refreshing: false,
    is_loading: false,
    load_status: null,
};

export default function chat(state = initialState, action) {

    switch (action.type) {
        case ChatAcitons.REFRESH_CHAT_DOING:
            return Object.assign({}, state, {refresh_status: 'doing', is_refreshing: true});

        case ChatAcitons.REFRESH_CHAT_SUC:
            return {
                ...state,
                refresh_status: 'done',
                is_refreshing: false,
                chats: chatList,
            };

        case ChatAcitons.REFRESH_CHAT_FAIL:
            return Object.assign({}, state, {refresh_status: 'fail', is_refreshing: false});

        case ChatAcitons.REFRESH_CHAT_ERROR:
            return Object.assign({}, state, {refresh_status: 'error', is_refreshing: false});

        case ChatAcitons.LOAD_CHAT_DOING:
            return Object.assign({}, state, {load_status: 'doing', is_loading: true});

        case ChatAcitons.LOAD_CHAT_SUC:
            let chats = state.chats.concat(
                [{id: 11, url: require('../images/team/4.jpg'), title: '梧桐山山村-二线关石板线路', desc: '[14条]我也去'},
                    {id: 12, url: require('../images/team/5.jpg'), title: '10月16日梧桐山打火锅1天休闲户外', desc: '[14条]我也去'}]
            );

            return {
                ...state,
                load_status: 'done',
                is_loading: false,
                chats: chats,
            };

        case ChatAcitons.LOAD_CHAT_FAIL:
            return Object.assign({}, state, {load_status: 'fail', is_loading: false});

        case ChatAcitons.LOAD_CHAT_ERROR:
            return Object.assign({}, state, {load_status: 'error', is_loading: false});

        case ChatAcitons.FILTER_CHAT:

            let data = state.chats.filter(chat => chat.title.indexOf(action.text) > -1 );
            return {
                ...state,
                load_status: 'done',
                is_loading: false,
                chats: data,
            };

        default:
            return state;
    }
}