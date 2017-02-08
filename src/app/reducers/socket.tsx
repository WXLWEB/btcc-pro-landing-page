import { ISocket } from '../constants/ReducerType';
import { ISocketAction } from '../constants/ActionType';

 const initialState = new(ISocket);

 export default function Socket(state: any= initialState, action: ISocketAction): ISocket {
   switch (action.type) {
     case 'connect socket success':
       console.log('connect socket success');
       return state;
     case 'connect socket failed':
       console.log('connect socket failed');
       return state;
     default:
       return state;
   }
 }
