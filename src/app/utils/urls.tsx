import { enviroment } from './env';

let getUrls = (enviroment) => {
  switch (enviroment) {
    case 'development':
      return {
        HOME_URL: 'https://staging.btcc.com',
        API_URL: 'https://api-staging.btcc.com',
        BASE_URL: 'https://exchange-staging.btcc.com',
        SOCKET_URL: 'wss://pro-ws-staging.btcc.com:2022',
      };
    case 'staging':
      return {
        HOME_URL: 'https://staging.btcc.com',
        API_URL: 'https://api-staging.btcc.com',
        BASE_URL: 'https://exchange-staging.btcc.com',
        SOCKET_URL: 'wss://pro-ws-staging.btcc.com:2022',
      };
    case 'production':
      return {
        HOME_URL: 'https://www.btcc.com',
        API_URL: 'https://api.btcc.com',
        BASE_URL: 'https://exchange.btcc.com',
        SOCKET_URL: 'wss://spotusd-ws.btcc.com:443',
      };
    default:
      return {
        HOME_URL: 'https://www.btcc.com',
        API_URL: 'https://api.btcc.com',
        BASE_URL: 'https://exchange.btcc.com',
        SOCKET_URL: 'wss://spotusd-ws.btcc.com:443',
      };
  }
};

export const { API_URL, BASE_URL, HOME_URL, SOCKET_URL } = getUrls(enviroment);
