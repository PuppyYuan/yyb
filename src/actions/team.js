'use strict'

import * as TEAM_ACTIONS from '../constants/team';

export function team_list(){
    return {
        'type': TEAM_ACTIONS.TEAM_LIST_SUC
    }
}

export function team_detail(id){
    return {
        'type': TEAM_ACTIONS.TEAM_DETAIL_SUC,
        'id': id
    }
}