import { ITerms, ITicker, ITos, IAccount, ILogout, ILocales, IPlaceOrderResponse } from './ReducerType';
import { ISocket } from '../constants/ReducerType';
export interface IaLLMapState {
    locales: ILocales;
    account: IAccount;
    logoutStatus: ILogout;
    ticker: ITicker;
    tos: ITos;
    terms: ITerms;
    placeOrderResponse: IPlaceOrderResponse;
    socket: ISocket;
};

export interface IappProps {
    actions: any;
    lang: string;
    logoutStatus: ILogout;
    ticker: ITicker;
    placeOrderResponse: IPlaceOrderResponse;
    tos: ITos;
    terms: ITerms;
    account: IAccount;
    socket: ISocket;
};

export interface IappState {
};

export interface IcontentProps {
    lang?: string;
    ticker?: ITicker;
    tos?: ITos;
    terms?: ITerms;
    account?: IAccount;
    socket?: ISocket;
}

export interface IcontentState {
    showTermOfService: boolean;
};

export interface ItosProps {
    actions?: any;
    closeTerm: () => void;
    terms?: ITerms;
    tos?: ITos;
    accept?: boolean;
}

export interface ItosState {
    submitting?: boolean;
};

export interface IheaderProps {
    account?: IAccount;
    terms?: ITerms;
    ticker?: ITicker;
    showTerm: () => void;
    response?: IPlaceOrderResponse;
    actions?: any;
}

export interface IheaderState {
}

export interface IbannerProps {
}

export interface IbannerState {
    easyImg: string;
    secureImg: string;
    industryImg: string;
}

export interface IaffiliateProps {
    lang?: string;
}

export interface IaffiliateState {
}

export interface IliquidityProps {
}

export interface IliquidityState {
}

export interface IsupportProps {
}

export interface IsupportState {
}

export interface IdownloadProps {
}

export interface IdownloadState {
}

export interface IappLinkProps {
}

export interface IappLinkState {
    showApp: boolean;
}

export interface IintroduceProps {
}

export interface IintroduceState {
}

export interface ItradeUIProps {
}

export interface ItradeUIState {
}

export interface IfeedbackProps {
  response?: IPlaceOrderResponse;
  responseError?: boolean;
  actions?: any;
}

export interface IfeedbackState {
}

export interface IAppDownloadContentProps {
    lang: string;
    actions: any;
}

export interface IAppDownloadContentState {
}
