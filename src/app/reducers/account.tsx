import { IAccount } from '../constants/ReducerType';
import { IAccountAction } from '../constants/ActionType';
import { Map } from 'immutable';

const initialState = new(IAccount);

export default function account(state: any = initialState, action: IAccountAction): any {
    switch (action.type) {
        case 'get account info success':
            spotAccountKey = action.payload.account_key;
            spotAccountID = action.payload.id;
            return Map({content: Map(action.payload)});
        case 'get account info failed':
            console.error('get account info failed');
            return state;
        case 'clear account info':
            return {
                content: Map({}),
            };
        default:
            return state;
    }
}
