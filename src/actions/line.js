'use strict'

import * as LINE_ACTIONS from '../constants/line';

export function line_list(){
    return {
        'type': LINE_ACTIONS.LINE_LIST_SUC
    }
}

export function line_detail(id){
    return {
        'type': LINE_ACTIONS.LINE_DETAIL_SUC,
        'id': id
    }
}