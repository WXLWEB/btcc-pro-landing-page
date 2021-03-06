import * as Immutable from 'immutable';

// 获取默认语言
import getDefaultLang from '../utils/lang';
import enLocales from '../resources/locales/en';
import zhLocales from '../resources/locales/zh';

const locales = {
    en: enLocales,
    zh: zhLocales,
};
const lang = getDefaultLang();

export class IAccount extends Immutable.Record({
    content: Immutable.Map({}),
}) {
    readonly content: Object;
}

export class ILocales extends Immutable.Record({
    lang: lang,
    messages: locales[lang],
}) {
    readonly lang: string;
    readonly messages: Object;
}

export interface ILogout {
    sequence: string;
};

export class ITerms extends Immutable.Record({
    accept: false,
    acceptFailed: false,
    from: '',
}) {
    readonly accept: boolean;
    readonly acceptFailed: boolean;
    readonly from: string;
}

export class ITicker extends Immutable.Record({
    lastPrice: 0,
    volume24H: 0,
    prevcls: 0,
}) {
    readonly lastPrice: number;
    readonly volume24H: number;
    readonly prevcls: number;
}

export class ITos extends Immutable.Record({
    content: '',
}) {
    content: string;
}

export class IPlaceOrderResponse extends Immutable.Record({
    tipSuccess: false,
    tipFailed: false,
    backSuccess: false,
    backFailed: false,
    error: false,
    failed: Immutable.Map({
        insufficient: false,
        incorrectQuantity: false,
        otherError: false,
    }),
}) {
    tipSuccess: boolean;
    tipFailed: boolean;
    backSuccess: boolean;
    backFailed: boolean;
    error: boolean;
    failed: {
        insufficient: boolean;
        incorrectQuantity: boolean;
        otherError: boolean;
    };
}

export class ISocket extends Immutable.Record({
    conversation: Immutable.List([{}]),
    status: false,
}) {
    conversation: [{}];
    status: boolean;
}
