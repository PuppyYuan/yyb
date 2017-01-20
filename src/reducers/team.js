'use strict'

import React from 'react';
import * as TeamActions from '../constants/team';

import {teamList} from '../assets/team';

const initialState = {
    teams: [],
    refresh_status: null,
    is_refreshing: false,
    is_loading: false,
    load_status: null,
};

export default function chat(state = initialState, action) {

    switch (action.type) {
        case TeamActions.REFRESH_TEAM_DOING:
            return Object.assign({}, state, {refresh_status: 'doing', is_refreshing: true});

        case TeamActions.REFRESH_TEAM_SUC:
            return {
                ...state,
                refresh_status: 'done',
                is_refreshing: false,
                teams: teamList,
            };

        case TeamActions.REFRESH_TEAM_FAIL:
            return Object.assign({}, state, {refresh_status: 'fail', is_refreshing: false});

        case TeamActions.REFRESH_TEAM_ERROR:
            return Object.assign({}, state, {refresh_status: 'error', is_refreshing: false});

        case TeamActions.LOAD_TEAM_DOING:
            return Object.assign({}, state, {load_status: 'doing', is_loading: true});

        case TeamActions.LOAD_TEAM_SUC:
            let teams = state.teams.concat(
                [{id: 11, url: require('../images/team/4.jpg'), title: '梧桐山山村-二线关石板线路', date: '2016.10.15 共0天'},
                    {id: 12, url: require('../images/team/5.jpg'), title: '10月16日梧桐山打火锅1天休闲户外', date: '2016.10.15 共0天'}]
            );

            return {
                ...state,
                load_status: 'done',
                is_loading: false,
                teams: teams,
            };

        case TeamActions.LOAD_TEAM_FAIL:
            return Object.assign({}, state, {load_status: 'fail', is_loading: false});

        case TeamActions.LOAD_TEAM_ERROR:
            return Object.assign({}, state, {load_status: 'error', is_loading: false});

        default:
            return state;
    }
}