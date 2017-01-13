'use strict'

import * as USER_ACTIONS from '../constants/user';

const initialState = {
    is_logged_in : false,
    user: {}, 
    status: null
}

export default function user(state=initialState, action){
    switch (action.type) {
        case USER_ACTIONS.LOGGED_DOING:
            return {
                ...state,
                status: 'doing'
            };
        case USER_ACTIONS.LOGGED_IN:
            return {
                ...state,
                is_logged_in: true,
                user: action.user,
                status: 'done'
            };
        case USER_ACTIONS.LOGGED_OUT:
            return {
                ...state,
                is_logged_in: false,
                user: {},
                status: null
            };
        case USER_ACTIONS.LOGGED_ERROR:
            return {
                ...state,
                is_logged_in: false,
                user: {},
                status: null
            };
        case USER_ACTIONS.REGIST_DOING:
            return {
                ...state,
                is_registed: false,
                regstatus: 'doing',
            };
        case USER_ACTIONS.REGIST_SUC:
            return {
                ...state,
                is_registed: true,
                regstatus: 'done',
            };
        case USER_ACTIONS.REGIST_FAIL:
            return {
                ...state,
                is_registed: false,
                regstatus: null
            };
        case USER_ACTIONS.REGIST_ERROR:
            return {
                ...state,
                is_registed: false,
                regstatus: 'error'
            };
        default:
            return state;
    }
}