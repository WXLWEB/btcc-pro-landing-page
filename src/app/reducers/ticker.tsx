import { ITicker } from '../constants/ReducerType';
import { ITickerAction } from '../constants/ActionType';
import { Map } from 'immutable';

const initialState = new(ITicker);

export default function ticker(state: ITicker = initialState, action: ITickerAction): any {
    switch (action.type) {
        case 'get ticker':
            return Map({
                lastPrice: action.payload.Last,
                volume24H: action.payload.Volume24H,
                prevcls: action.payload.PrevCls,
            });
        case 'get quote response':
             return Map({
                 lastPrice: action.payload.Last,
                 volume24H: action.payload.Volume24H,
                 prevcls: action.payload.PrevCls,
             });
        default:
            return state;
    }
}
