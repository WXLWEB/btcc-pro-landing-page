import { combineReducers } from 'redux';
import locales from './locales';
import account from './account';
import ticker from './ticker';
import tos from './tos';
import terms from './terms';
import logoutStatus from './logout';
import socketAccount from './socketAccount';
import placeOrderResponse from './placeOrderResponse';

const rootReducer = combineReducers({
  locales,
  account,
  ticker,
  tos,
  terms,
  logoutStatus,
  socketAccount,
  placeOrderResponse,
});

export default rootReducer;
