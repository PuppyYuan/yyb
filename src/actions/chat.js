'use strict'

import * as CHAT_ACTIONS from '../constants/chat';

export function chat_list(){
    return (dispatch) => {
        dispatch({'type': CHAT_ACTIONS.CHAT_LIST_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
                .then((res)=>{
                    dispatch({'type': CHAT_ACTIONS.CHAT_LIST_SUC, user: {}})
                })
                .catch((e)=>{
                    alert(e.message);
                    dispatch({'type': CHAT_ACTIONS.CHAT_LIST_ERROR, error: e});
                });
        }, 2000)
    }
}