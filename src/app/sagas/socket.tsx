import { takeLatest } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';
import { SOCKET_URL } from '../utils/urls';

function* connectSocket() {
  const ws = {
    url: `${SOCKET_URL}`,
  };
  yield put({ type: 'CONNECT', payload: ws });
};

function* disconnectSocket () {
};

function* sendMessage (parameter: Object) {
  yield put({type: 'SENDMESSAGE', payload: parameter});
};

function* socketConnected (parameter: Object) {
  yield put({type: 'start send public request'});
  // yield put({type: 'get quote request'});
  // yield put({type: 'get accountinfo request'});
};

function* receiveMessages(actions: any) {
  const params = (actions as any).payload;
  switch (params.MsgType) {
    case 'QuoteResponse':
      yield put( {type: 'get quote response', payload: params.Ticker});
      break;
    case 'Ticker':
      yield put({type: 'get ticker', payload: params});
      break;
    case 'AccountInfo':
      yield put({type: 'get accountinfo response', payload: params});
      break;
    case 'GetAccountInfoResponse':
      yield put({type: 'get accountinfo response', payload: params.AccountInfo});
      break;
    case 'PlaceOrderResponse':
      yield put({type: 'place order response', payload: params});
      break;
    default:
      console.log('Received unknown message type: ', params.MsgType);
      break;
  }
};

export default function* () {
    yield fork(takeLatest, 'connect socket', connectSocket);
    yield fork(takeLatest, 'disconnect socket', disconnectSocket);
    yield fork(takeLatest, 'receive messages', receiveMessages);
    yield fork(takeLatest, 'send message', sendMessage);
    yield fork(takeLatest, 'socket connected', socketConnected);
}
