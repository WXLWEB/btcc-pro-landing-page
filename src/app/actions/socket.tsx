
import { createAction } from 'redux-actions';

export const connecting = createAction('connecting');
export const connectSocket = createAction('connect socket');
export const disconnectSocket = createAction('disconnect socket');
export const receiveMessage = createAction('receive messages');
export const sendMessage = createAction('send message');
export const socketConnected = createAction('socket connected');
