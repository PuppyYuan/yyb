'use strict'

import * as LINE_ACTIONS from '../constants/line';

export function line_list(){

    return (dispatch) => {
        dispatch({'type': LINE_ACTIONS.LINE_LIST_DOING});
        let inner_get = fetch('https://www.baidu.com')
            .then((res)=>{
                dispatch({'type': LINE_ACTIONS.LINE_LIST_SUC, user: {}})
            })
            .catch((e)=>{
                alert(e.message);
                dispatch({'type': LINE_ACTIONS.LINE_LIST_ERROR, error: e});
            });
    }
}

export function line_detail(id){
    return {
        'type': LINE_ACTIONS.LINE_DETAIL_SUC,
        'id': id
    }
}