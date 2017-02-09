/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

import * as LocaleActions from '../../actions/locales';
import * as AccountActions from '../../actions/account';
import * as TickerActions from '../../actions/ticker';
import * as TosActions from '../../actions/tos';
import * as SocketActions from '../../actions/socket';

import event from '../../utils/customEvent';
import Home from './Home/index';

import { IappProps, IappState, IaLLMapState } from '../../constants/AppType';

let time = null;
let checkAccountTime = null;
let changeLangTime = null;
let changeLangCount = 0;

class App extends React.Component<IappProps, IappState> {
  listenerFooter = (e: MouseEvent) => {
    const { actions } = this.props;
    if ((e.target as HTMLDivElement).getAttribute('id') === 'lang_btn') {
      actions.changeLang(document.getElementById('lang_btn').getAttribute('data-lang'));
      actions.updateUserConfig({ key: 'user_language', value: document.getElementById('lang_btn').getAttribute('data-lang') });
    }
  }

  listenerHeader = (e: MouseEvent) => {
    const { actions } = this.props;
    if ((e.target as HTMLElement).parentElement.getAttribute('id') === 'logout_btn') {
      actions.logout();
      this.props.actions.clearAccount();
      setTimeout(this.checkJwt, 2000);
    }
  }

  corewebConnect = () => {
    document.getElementById('reactGeneralFooter').addEventListener('click', this.listenerFooter);
    document.getElementById('reactGeneralHeader').addEventListener('click', this.listenerHeader);
  }

  checkJwt = () => {
    if (checkAccountTime) {
      clearInterval(checkAccountTime);
    }
    if (!cookie.load('btcchina_jwt')) {
      checkAccountTime = setInterval(this.checkJwt, 1000);
    } else {
      this.props.actions.getAccountInfo();
      // this.props.actions.getSpotBalance();
    }
  }

  switchLang = () => {
    changeLangCount++;
    if (changeLangTime) {
      clearInterval(changeLangTime);
    }
    if (changeLangCount > 15) {
      return;
    }
    event.trigger('reactSwitchLang', this.props.lang);
    changeLangTime = setInterval(this.switchLang, 1000);
  }

  componentDidMount() {
    this.corewebConnect();
    this.checkJwt();
    this.props.actions.getAccountInfo();
    this.props.actions.getTos({ lang: this.props.lang });
    // this.props.actions.getSpotBalance();
    this.props.actions.connectSocket();
  }

  componentWillMount() {
    this.switchLang();
  }

  componentWillUnmount() {
    document.getElementById('reactGeneralFooter').removeEventListener('click', this.listenerFooter);
    document.getElementById('reactGeneralHeader').removeEventListener('click', this.listenerHeader);
    if (time) {
      clearInterval(time);
    }
    if (checkAccountTime) {
      clearInterval(checkAccountTime);
    }
  }

  render() {
    return (
      <div>
        <div className='home'>
          <Home />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state: IaLLMapState) {
  return {
    lang: state.locales.get('lang'),
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(Object.assign({}, LocaleActions, AccountActions, TickerActions, TosActions, SocketActions), dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
