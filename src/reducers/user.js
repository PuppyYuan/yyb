'use strict'

import * as UserActions from '../constants/user';

const initialState = {
    is_logged_in : false,
    user: {}, 
    status: null
}

export default function user(state=initialState, action){
    switch (action.type) {
        case UserActions.LOGGED_DOING:
            return {
                ...state,
                status: 'doing'
            };
        case UserActions.LOGGED_IN:
            return {
                ...state,
                is_logged_in: true,
                user: action.user,
                status: 'done'
            };
        case UserActions.LOGGED_OUT:
            return {
                ...state,
                is_logged_in: false,
                user: {},
                status: null
            };
        case UserActions.LOGGED_ERROR:
            return {
                ...state,
                is_logged_in: false,
                user: {},
                status: null
            };
        case UserActions.REGIST_DOING:
            return {
                ...state,
                is_registed: false,
                regstatus: 'doing',
            };
        case UserActions.REGIST_SUC:
            return {
                ...state,
                is_registed: true,
                regstatus: 'done',
            };
        case UserActions.REGIST_FAIL:
            return {
                ...state,
                is_registed: false,
                regstatus: null
            };
        case UserActions.REGIST_ERROR:
            return {
                ...state,
                is_registed: false,
                regstatus: 'error'
            };
        default:
            return state;
    }
}