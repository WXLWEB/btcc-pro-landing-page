/// <reference path="../typings/index.d.ts" />
import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IStore } from '~react-redux~redux';
import { Provider } from 'react-redux';
import App from './app/containers/App/index';
import AppDownload from './app/containers/AppDownload/index';
import configureStore from './app/store/configureStore';
import { Router, Route, browserHistory } from 'react-router';
import ConnectedIntlProvider from './app/components/ConnectedIntlProvider/index';

import './index.less';
require('./app/resources/scripts/analytics.js');
declare var process: { env: { DEPLOY_ENV: string, NODE_ENV: string } };
console.log ('[APP] run ' + JSON.stringify(process.env.DEPLOY_ENV) );
const store: IStore<any> = configureStore({});

global.spotAccountKey = null;
global.spotAccountID = null;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
     <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/appdownload' component={AppDownload} />
     </Router>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);
