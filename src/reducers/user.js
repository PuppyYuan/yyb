'use strict'

import * as USER_ACTIONS from '../constants/user';

const initilaState = {
    is_logged_in : false,
    user: {}, 
    status: null
}

export default function user(state=initilaState, action){
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
        default:
            return state;
    }
}