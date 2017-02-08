import { fork } from 'redux-saga/effects';
import locales from './locales';
import account from './account';
import tos from './tos';
import socket from './socket';
import request from './request';

export default function* root(): void {
    yield fork(locales);
    yield fork(account);
    yield fork(tos);
    yield fork(socket);
    yield fork(request);
}
