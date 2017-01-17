'use strict'

import React from 'react';
import * as LINE_ACTIONS from '../constants/line';

import { lineData } from '../assets/line';

const initialState = {
    lines: [],
    fetch_status: null,
    is_fetching: false,
}

export default function line(state= initialState, action) {

    switch (action.type) {
        case LINE_ACTIONS.LINE_LIST_DOING:
            return Object.assign({}, state, {fetch_status: 'doing', is_fetching: true});

        case LINE_ACTIONS.LINE_LIST_SUC:
            return Object.assign({}, state, {fetch_status: 'done', lines: lineData, is_fetching: false});

        case LINE_ACTIONS.LINE_LIST_FAIL:
            return Object.assign({}, state, {fetch_status: 'fail', is_fetching: false});

        case LINE_ACTIONS.LINE_LIST_ERROR:
            return Object.assign({}, state, {fetch_status: 'error', is_fetching: false});

        default:
            return state;
    }
}