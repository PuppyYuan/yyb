'use strict'

import * as TeamActions from '../constants/team';

export function refresh_team(){
    return (dispatch) => {
        dispatch({'type': TeamActions.REFRESH_TEAM_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
                .then((res)=>{
                    dispatch({'type': TeamActions.REFRESH_TEAM_SUC})
                })
                .catch((e)=>{
                    alert(e.message);
                    dispatch({'type': TeamActions.REFRESH_TEAM_ERROR, error: e});
                });
        }, 1000)
    }
}

export function load_team() {
    return (dispatch) => {
        dispatch({'type': TeamActions.LOAD_TEAM_DOING});

        setTimeout(()=>{
            let inner_get = fetch('https://www.baidu.com')
                .then((res)=>{
                    dispatch({'type': TeamActions.LOAD_TEAM_SUC, user: {}})
                })
                .catch((e)=>{
                    alert(e.message);
                    dispatch({'type': TeamActions.LOAD_TEAM_ERROR, error: e});
                });
        }, 1000)
    }
}

export function team_detail(id){
    return {
        'type': TEAM_ACTIONS.TEAM_DETAIL_SUC,
        'id': id
    }
}