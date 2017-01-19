'use strict'

import * as LINE_ACTIONS from '../constants/line';

export function refresh_line(){

    return (dispatch) => {
        dispatch({'type': LINE_ACTIONS.LINE_LIST_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
            .then((res)=>{
                dispatch({'type': LINE_ACTIONS.LINE_LIST_SUC, user: {}})
            })
            .catch((e)=>{
                alert(e.message);
                dispatch({'type': LINE_ACTIONS.LINE_LIST_ERROR, error: e});
            });
        }, 2000)
    }
}

export function line_detail(id){
    return {
        'type': LINE_ACTIONS.LINE_DETAIL_SUC,
        'id': id
    }
}

export function load_line() {
    
}