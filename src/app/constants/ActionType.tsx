export interface IAccountAction {
    payload: {
        account_key?: string;
        id?: string
    };
    type: string;
};

export interface ILocalesAction {
    payload: {};
    type: string;
};

export interface ILogoutAction {
    payload: {};
    type: string;
};

export interface ITermsAction {
    payload: {
        spotusd_tos_accepted?: boolean;
        from?: string;
    };
    type: string;
};

export interface ITickerAction {
    payload: {
            Last: number;
            Volume24H: number;
            PrevCls: number;
    };
    type: string;
};

export interface ITosAction {
    payload: string;
    type: string;
};

 export interface IPlaceOrderResponseAction {
     payload: {
         RC?: string;
         OrdRejReason?: number;
     };
     type: string;
 };

 export interface ISocketAction {
     payload: string;
     type: string;
 };
