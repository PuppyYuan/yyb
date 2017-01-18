'use strict'

import React from 'react';
import * as CHAT_ACTIONS from '../constants/chat';

import { chatList } from '../assets/chat';

const initialState = {
    chats: [],
    fetch_status: null,
    is_fetching: false,
};

export default function chat(state = initialState, action ){

    switch (action.type) {
        case CHAT_ACTIONS.CHAT_LIST_DOING:
            return Object.assign({}, state, {fetch_status: 'doing', is_fetching: true});

        case CHAT_ACTIONS.CHAT_LIST_SUC:
            return Object.assign({}, state, {fetch_status: 'done', chats: chatList, is_fetching: false});

        case CHAT_ACTIONS.CHAT_LIST_FAIL:
            return Object.assign({}, state, {fetch_status: 'fail', is_fetching: false});

        case CHAT_ACTIONS.CHAT_LIST_ERROR:
            return Object.assign({}, state, {fetch_status: 'error', is_fetching: false});

        default:
            return state;
    }
}