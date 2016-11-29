'use strict'

export default class NetUtils {

    static post = (url, data, callback, errCallback) => {
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then((res) => {res.text()})
            .then((resTxt) => {
                callback(JSON.parse(rexTxt));
            })
            .catch((e) => {
                alert(e);
                errCallback();
            })
            .done();
    }

    static get = (url, callback) => {
        fetch(url)
            .then((res) => {res.text()})
            .then((resTxt) => {
                callback(JSON.parse(rexTxt));
            })
            .catch((e) => {
                alert(e);
                errCallback();
            })
            .done();
    } 
}