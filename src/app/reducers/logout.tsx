import { ILogout } from '../constants/ReducerType';
import { ILogoutAction } from '../constants/ActionType';

import event from '../utils/customEvent';
import cookie from 'react-cookie';

const initialState: ILogout = {
  sequence: 'next',
};

export default function logout(state: ILogout = initialState, action: ILogoutAction): ILogout {
  switch (action.type) {
    case 'logout success':
      console.log('logout success');
      (event as any).trigger('reactLogoutSuccess');
      cookie.remove('btcchina_jwt', { domain: '.btcc.com', path: '/' });
      return state;
    case 'logout failed':
      console.log('logout failed');
      return state;
    default:
      return state;
  }
}
