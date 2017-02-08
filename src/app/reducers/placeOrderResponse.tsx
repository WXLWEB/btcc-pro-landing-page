
import { IPlaceOrderResponseAction } from '../constants/ActionType';
import { IPlaceOrderResponse } from '../constants/ReducerType';
import { Map } from 'immutable';

const initialState = new (IPlaceOrderResponse);

export default function placeOrderResponse(state: IPlaceOrderResponse = initialState, action: IPlaceOrderResponseAction) {
  switch (action.type) {
    case 'place order response':
      if (action.payload.RC === '0') {
        return state.update('tipSuccess', v => true).update('backSuccess', v => true);
      } else {
        const failed = {
          insufficient: false,
          incorrectQuantity: false,
          otherError: false,
        };
        switch (action.payload.OrdRejReason) {
          case 110:
            failed.insufficient = true;
            break;
          case 13:
            failed.incorrectQuantity = true;
            break;
          default:
           failed.otherError = true;
            break;
        }
        return state.update('tipFailed', v => true)
        .update('backFailed', v => true)
        .update('failed', v => Map(failed));
      };
    case 'reset feedback tips':
      return state.update('tipSuccess', v => false).update('tipFailed', v => false);
    case 'reset feedback back':
      return state.update('backSuccess', v => false)
      .update('backFailed', v => false)
      .update('failed', v => Map({
        insufficient: false,
        incorrectQuantity: false,
        otherError: false,
      }));
    case 'set error to true':
      return state.update('error', v => true);
    case 'set error to false':
      return state.update('error', v => false);
    default:
      return state;
  }
}
