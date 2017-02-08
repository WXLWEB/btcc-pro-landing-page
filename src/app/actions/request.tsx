import { createAction } from 'redux-actions';

export const startSendPublicRequest = createAction('start send public request');
export const getQuoteRequest = createAction('get quote request');
export const startSendPrivateRequest = createAction('start send private request');
export const getAccountinfoRequest = createAction('get accountinfo request');
export const loginRequest = createAction('login request');
export const placeOrderRequest = createAction('place order request');
