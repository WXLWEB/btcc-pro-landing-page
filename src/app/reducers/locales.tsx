import cookie from 'react-cookie';
import { Map } from 'immutable';
import { ILocales } from '../constants/ReducerType';
import { ILocalesAction } from '../constants/ActionType';
import enLocales from '../resources/locales/en';
import zhLocales from '../resources/locales/zh';

const locales = {
  en: enLocales,
  zh: zhLocales,
};

const initialState = new(ILocales);
export default function localesManage(state: ILocales = initialState, action:  ILocalesAction): any {
  switch (action.type) {
      case 'change lang':
        const userLang = action.payload ? action.payload === 'en' ? 'en' : 'zh' : state.lang === 'en' ? 'zh' : 'en';
        cookie.save('btcchina_lang', userLang, {
            domain: '.btcc.com',
            path: '/',
            expires: new Date(Date.now() + 8760 * 3600 * 1000),
          });
        return Map({
            lang: userLang,
            messages: locales[userLang],
        });
      default:
        return state;
  }
}
