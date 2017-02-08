import * as fetch from 'isomorphic-fetch';
import * as es6promise from 'es6-promise';

es6promise.polyfill();
import cookie from 'react-cookie';
import { API_URL } from './urls';
import { enableLog } from './log';
import * as uuid from 'uuid4';

interface IJwtOption {
    domain: string;
    path: string;
    secure: boolean;
    expires?: string;
}

const jsonrpcFetch = (path = '', method = '', params = {}) => {
    return fetch(API_URL + path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Json-Web-Token': cookie.load('btcchina_jwt') || '',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            method: method,
            id: uuid(),
            params: params,
        }),
    }).then((response) => {
        if (response.status === 200 && response.headers['Last-Modified']) {
            const recToken = response.headers.get('Last-Modified');
            if (recToken.indexOf('.') > -1) {
                let jwtInfoBase64 = recToken.split('.')[1];
                let jwtInfo = JSON.parse(atob(jwtInfoBase64));
                let isKeepLogin = (+new Date) / 1000 < jwtInfo.exp - 86400;
                let jwtOption: IJwtOption = {
                    domain: '.btcc.com',
                    path: '/',
                    secure: true,
                };
                if (isKeepLogin) {
                    jwtOption.expires = (new Date(Date.now() + 30 * 1000)).toString();
                }
                cookie.save('btcchina_lang', recToken, jwtOption);
            }
        }
        return response.json();
    }).then((response) => {
        if (typeof response === 'object' && response.result) {
            return response.result;
        }
        return response;
    }).catch((error) => {
        console.log('error:', error);
        if (enableLog) {
            console.log(error);
        }
    });
};

export {
    jsonrpcFetch
}
