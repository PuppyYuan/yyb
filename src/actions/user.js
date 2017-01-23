'use strict';

import * as UserActions from '../constants/user';

export function login(user) {
    return (dispatch) => {
        dispatch({'type': UserActions.LOGGED_DOING});
        let inner_get = fetch('https://www.baidu.com')
            .then((res) => {
                dispatch({'type': UserActions.LOGGED_IN, user: {}})
            })
            .catch((e) => {
                alert(e.message);
                dispatch({'type': UserActions.LOGGED_ERROR, error: e});
            });
    }
}

export function logout() {
    return {'type': UserActions.LOGGED_OUT}
}

export function regist(user) {
    return (dispatch) => {
        dispatch({'type': UserActions.REGIST_DOING});

        // let url = "http://192.168.4.8/client/test";
        let url = "https://www.baidu.com";
        let formData = new FormData();
        let file = {uri: user.avatar.uri, type: 'multipart/form-data', name: user.avatar.fileName};

        formData.append("username", user.username);
        formData.append("password", user.password);
        formData.append("avatar", file);

        fetch(url,
            {
                // method: 'POST',
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
                // body: formData,
            })
            .then((response) => response.text())
            .then((responseData) => {
                console.log('responseData', responseData);
                dispatch({'type': UserActions.REGIST_SUC});
            })
            .catch((error) => {
                console.error('error', error)
                dispatch({'type': UserActions.REGIST_ERROR, error: e});
            });
    }

}