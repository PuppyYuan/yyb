'use strict'

import * as ChatActions from '../constants/chat';

export function refresh_chat() {
    return (dispatch) => {
        dispatch({'type': ChatActions.REFRESH_CHAT_DOING});

        let inner_get = fetch('https://www.baidu.com')
            .then((res) => {
                dispatch({'type': ChatActions.REFRESH_CHAT_SUC})
            })
            .catch((e) => {
                alert(e.message);
                dispatch({'type': ChatActions.REFRESH_CHAT_ERROR, error: e});
            });

    }
}

export function load_chat() {
    return (dispatch) => {
        dispatch({'type': ChatActions.LOAD_CHAT_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
                .then((res) => {
                    dispatch({'type': ChatActions.LOAD_CHAT_SUC})
                })
                .catch((e) => {
                    alert(e.message);
                    dispatch({'type': ChatActions.LOAD_CHAT_ERROR, error: e});
                });
        }, 2000);

    }
}

export function filter_chat(text) {
    return {'type': ChatActions.FILTER_CHAT, text: text};
}