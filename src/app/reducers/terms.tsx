import { ITerms } from '../constants/ReducerType';
import { ITermsAction } from '../constants/ActionType';

const initialState = new(ITerms);

export default function terms(state: ITerms = initialState, action: ITermsAction) {
    switch (action.type) {
        case 'get spot balance success':
            return state.update('accept', v => action.payload.spotusd_tos_accepted);
        case 'get spot balance failed':
            return state;
        case 'agree tos success':
            return state.update('accept', v => true);
        case 'agree tos failed':
            return state.update('acceptFailed', v => true);
        case 'set terms from' :
            return state.update('from', v => action.payload.from);
        default:
            return state;
    }
}
