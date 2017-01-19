'use strict'

import * as LineActions from '../constants/line';

export function refresh_line(){

    return (dispatch) => {
        dispatch({'type': LineActions.REFRESH_LINE_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
            .then((res)=>{
                dispatch({'type': LineActions.REFRESH_LINE_SUC, user: {}})
            })
            .catch((e)=>{
                alert(e.message);
                dispatch({'type': LineActions.REFRESH_LINE_ERROR, error: e});
            });
        }, 1000)
    }
}

export function line_detail(id){
    return {
        'type': LineActions.LINE_DETAIL_SUC,
        'id': id
    }
}

export function load_line() {
    return (dispatch) => {
        dispatch({'type': LineActions.LOAD_LINE_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
                .then((res)=>{
                    dispatch({'type': LineActions.LOAD_LINE_SUC, user: {}})
                })
                .catch((e)=>{
                    alert(e.message);
                    dispatch({'type': LineActions.LOAD_LINE_ERROR, error: e});
                });
        }, 1000)
    }
}