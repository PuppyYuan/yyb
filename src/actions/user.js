'use strict'
  
import * as USER_ACTIONS from '../constants/user'

export function login(user) {
    return (dispatch) => {
        dispatch({'type': USER_ACTIONS.LOGGED_DOING});
        let inner_get = fetch('https://www.baidu.com')
            .then((res)=>{
                dispatch({'type': USER_ACTIONS.LOGGED_IN, user: {}})
            })
            .catch((e)=>{
                alert(e.message);
                dispatch({'type': USER_ACTIONS.LOGGED_ERROR, error: e});
            });
    }
}

export function logout(){
    return {'type': USER_ACTIONS.LOGGED_OUT}
}