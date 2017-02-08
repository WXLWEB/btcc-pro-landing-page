import { SOCKET_URL } from './urls';

 const connectSocket = async () => {
   const ws = {
     url: `${SOCKET_URL}`,
   };
   return ws;
 };

 export default {
   connectSocket,
 };
