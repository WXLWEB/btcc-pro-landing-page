import * as SocketActions from '../actions/socket';

const socketMiddleware = (function () {
    var socketWs = null;

    const onOpen = (ws, store, token) => evt => {
        // send a handshake, or authenticate with remote end

        // tell the store we're connected
        store.dispatch(SocketActions.socketConnected());
    };

    const onClose = (ws, store) => evt => {
        // tell the store we've disconnected
        store.dispatch(SocketActions.disconnectSocket());
    };

    const onMessage = (ws, store) => evt => {
        // parse the JSON message received on the websocket
        var msg = JSON.parse(evt.data);
        switch (msg.MsgType) {
            case 'Heartbeat':
                // heartbeat connect websocket
                break;
            default:
                store.dispatch(SocketActions.receiveMessage(msg));
                break;
        }
    };

    return store => next => action => {
        switch (action.type) {
            // the user wants us to connect
            case 'CONNECT':
                // start a new connection to the server
                if (socketWs != null) {
                    socketWs.close();
                }
                // send an action that shows a 'connecting...' status for now
                store.dispatch(SocketActions.connecting());

                // attempt to connect (we could send a 'failed' action on error)
                socketWs = new WebSocket(action.payload.url);
                socketWs.onmessage = onMessage(socketWs, store);
                socketWs.onclose = onClose(socketWs, store);
                socketWs.onopen = onOpen(socketWs, store, action.token);

                break;

            // disconnect
            case 'DISCONNECT':
                if (socketWs != null) {
                    socketWs.close();
                }
                socketWs = null;

                // set our state to disconnected
                store.dispatch(SocketActions.disconnectSocket());
                break;

            // send the 'SEND_MESSAGE' action down the websocket to the server
            case 'SENDMESSAGE':
                socketWs.send(action.payload);
                break;

            // this action is irrelevant to us, pass it on to the next middleware
            default:
                return next(action);
        }
    };

})();

export default socketMiddleware;
