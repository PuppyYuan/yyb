'use strict'

import * as LINE_ACTIONS from '../constants/line';

const initialState = {
    lines: {},
    status: null
}

export default function line(state= initialState, action) {
    switch (action.type) {
        case LINE_ACTIONS.LINE_LIST_DOING:
            return {
                ...state,
                lines: {},
                state: 'doing'
            };
        case LINE_ACTIONS.LINE_LIST_SUC:
            return {
                ...state,
                lines: action.lines,
                state: 'done'
            };
        case LINE_ACTIONS.LINE_LIST_FAIL:
            return {
                ...state,
                lines: {},
                state: null
            };
        case LINE_ACTIONS.LINE_LIST_ERROR:
            return {
                ...state,
                lines: {},
                state: null
            };
        default:
            return state;
    }
}