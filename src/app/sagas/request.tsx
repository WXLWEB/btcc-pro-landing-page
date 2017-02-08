import { takeLatest } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';
import wsRequest from '../utils/wsRequest';

function* getQuoteRequest() {
    yield put({ type: 'SENDMESSAGE', payload: wsRequest.createQuoteRequest('BTCUSD', '2') });
}

function* loginRequest() {
    yield put({ type: 'SENDMESSAGE', payload: wsRequest.createLoginRequest() });
}

function* getAccountinfoRequest() {
    yield put({ type: 'SENDMESSAGE', payload: wsRequest.createGetAccountInfoRequest() });
}

function* startSendPublicRequest() {
    yield put({ type: 'get quote request'});
}

function* startSendPrivateRequest() {
    yield put({ type: 'login request'});
    yield put({ type: 'get accountinfo request'});
}

function* placeOrderRequest(order: any) {
  // symbol, side, orderType, quantity, price, stopPrice, TIF, exprDate, exprTime
  yield put({ type: 'SENDMESSAGE', payload: wsRequest.createPlaceOrderRequest(order.payload.symbol , order.payload.side, order.payload.orderType, order.payload.quantity, order.payload.price, order.payload.stopPrice, order.payload.TIF, order.payload.exprDate, order.payload.exprTime)});
}

export default function* () {
    yield fork(takeLatest, 'get quote request', getQuoteRequest);
    yield fork(takeLatest, 'login request', loginRequest);
    yield fork(takeLatest, 'get accountinfo request', getAccountinfoRequest);
    yield fork(takeLatest, 'start send public request', startSendPublicRequest);
    yield fork(takeLatest, 'start send private request', startSendPrivateRequest);
    yield fork(takeLatest, 'place order request', placeOrderRequest);
}
