import 'isomorphic-fetch';
import * as fetch from 'isomorphic-fetch';
import { jsonrpcFetch } from './jsonrpc';
import { HOME_URL } from './urls';
import getDefaultLang from './lang';

const account = (method, params) => {
  return jsonrpcFetch(`/api.php/account?lang=${getDefaultLang()}`, method, params);
};

const spotusd = (method, params) => {
  return jsonrpcFetch('/api.php/spotusd', method, params);
};

const procny = (method, params) => {
  return jsonrpcFetch('/api.php', method, params);
};

const logout = async () => {
  return await account('logout', {}).then((data) => {
    if (typeof data === 'boolean' && data) {
      return {};
    }
  });
};

const updateUserConfig = async (params) => {
  return await account('updateUserConfig', params).then((data) => {
    return data;
  });
};

const getAccountInfo = async (params) => {
  return await account('getUserAccountInfo', params).then((data) => {
    if (typeof data === 'object' && data.account) {
      return data.account;
    }
  });
};

const getTicker = async () => {
  return await fetch('https://spotusd-data.btcc.com/data/pro/ticker?symbol=btcusd').then((response) => {
    return response.json();
  }).then((response) => {
    return response;
  });
};

const getTos = async (lang) => {
  return await fetch(`${HOME_URL}/content/terms-of-service?lang=${lang.lang}`).then((response) => {
    return response.text();
  }).then((response) => {
    return response;
  });
};

const getSpotBalance = async () => {
  return await spotusd('getAccountInfo', { 'account_type': 'MAINLAND_CHINA' }).then((data) => {
    if (typeof data === 'object') {
      return data;
    }
  });
};

const agreeTos = async () => {
  return await procny('agreeFuturesTerms', { 'version': '1.0' }).then((data) => {
      return data;
    });
};

const createAccount = async () => {
  return await spotusd('createAccount', {}).then((data) => {
    if (typeof data === 'object') {
      return data;
    }
  });
};

export default {
  logout,
  updateUserConfig,
  getAccountInfo,
  getTicker,
  getTos,
  getSpotBalance,
  agreeTos,
  createAccount,
};
