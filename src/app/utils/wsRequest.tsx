import wsSignature from './wsSignature';

const moment = require('moment');

const createRequest = (type) => {
  return {
    MsgType: type,
    CRID: wsSignature.getUniqueID(),
  };
};

const createSignedRequest = (type) => {
  const request = createRequest(type);
  const date = new Date();
  request.Date = moment(date).format('YYYYMMDD'); // 20160520
  request.Account = spotAccountID;
  return request;
};

const signedRequest = (request, fields) => {
  const headers = [request.MsgType, request.CRID, request.Date, request.Account];
  const concatArray = [];
  if (fields) {
    concatArray = headers.concat(fields);
  }else {
    concatArray = headers;
  };
  const joinStr = concatArray.join('');
  request.SIG = wsSignature.getSignature(joinStr);
  return request;
};

const createGetTradesRequest = (symbol, count) => {
  const request = createRequest('GetTradesRequest');
  request.Count = count;
  request.Symbol = symbol;
  return JSON.stringify(request);
};

const createQuoteRequest = (symbol, type) => {
  const request = createRequest('QuoteRequest');
  request.Symbol = symbol;
  request.QuoteType = type;
  return JSON.stringify(request);
};

const createGetOrdersRequest = (begin, end, status) => {
  const request = createSignedRequest('GetOrdersRequest');
  request.Status = status;
  request.Begin = begin;
  request.End = end;
  signedRequest(request, [begin, end, status]);
  return JSON.stringify(request);
};

const createLoginRequest = () => {
  const request = createSignedRequest('LoginRequest');
  signedRequest(request);
  return JSON.stringify(request);
};

const createGetAccountInfoRequest = () => {
  const request = createSignedRequest('GetAccountInfoRequest');
  signedRequest(request);
  return JSON.stringify(request);
};

const createPlaceOrderRequest = (symbol, side, orderType, quantity, price, stopPrice, TIF, exprDate, exprTime) => {
  const request = createSignedRequest('PlaceOrderRequest');
  request.Symbol = symbol;
  request.Side = side;
  request.OrderType = orderType;
  request.Quantity = quantity;
  request.Price = price;
  request.StopPrice = stopPrice;
  request.TIF = TIF;
  request.ExprDate = exprDate;
  request.ExprTime = exprTime;
  signedRequest(request, [symbol, side, orderType, quantity, price, stopPrice, TIF, exprDate, exprTime]);
  return JSON.stringify(request);
};

const createCancelOrderRequest = (OID) => {
  const request = createSignedRequest('CancelOrderRequest');
  request.OID = OID;
  signedRequest(request, [OID]);
  return JSON.stringify(request);
};

const createCancelReplaceOrderRequest = (OID, Quantity, Price, StopPrice, OldQuantity) => {
  const request = createSignedRequest('CancelReplaceOrderRequest');
  request.OID = OID;
  request.Quantity = Quantity;
  request.OldQuantity = OldQuantity;
  request.Price = Price;
  request.StopPrice = StopPrice;
  signedRequest(request, [OID, Quantity, Price, StopPrice, OldQuantity]);
  return JSON.stringify(request);
};

export default {
  createGetTradesRequest,
  createQuoteRequest,
  createGetOrdersRequest,
  createLoginRequest,
  createGetAccountInfoRequest,
  createPlaceOrderRequest,
  createCancelOrderRequest,
  createCancelReplaceOrderRequest,
};