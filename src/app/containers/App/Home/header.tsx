import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Scrollchor from 'react-scrollchor';
import FeedbackForm from '../../../components/Form/FeedbackForm/index' ;
import Ticker from '../../../components/Ticker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlaceOrderResponseActions from '../../../actions/placeOrderResponse';
import * as RequestActions from '../../../actions/request';
import * as TosActions from '../../../actions/tos';

const qrcode = require('../../../resources/images/pro_exchange_download.png');
const phone = require('../../../resources/images/Phone.png');

import './header.less';
import { BASE_URL } from '../../../utils/urls';
require('../../../resources/fonts/fonts.less');

import { IheaderProps, IheaderState, IaLLMapState } from '../../../constants/AppType';

class Header extends React.Component<IheaderProps, IheaderState> {
    handleClick = (type: string) => {
        this.props.actions.setTermsFrom({from: type});
        if (type === 'trade' && !this.props.account.get('content').get('id')) {
            window.location.href = `${BASE_URL}/trade/xbtcny`;
        }else if (!this.props.account.get('content').get('id')) {
            if (document.getElementById('sign_in_btn')) {
                document.getElementById('sign_in_btn').click();
            } else {
                window.location.reload();
            }
        } else if (!this.props.terms.get('accept')) {
            this.props.showTerm();
        } else if (type === 'account') {
            window.location.href = `${BASE_URL}/account/overview`;
        } else {
            window.location.href = `${BASE_URL}/trade/xbtcny`;
        }
    }
    componentDidMount() {
        const path = window.location.href;
        if (path.match('#download')) {
            document.getElementById('downloadButton').click();
        }
    }
    render() {
        return (
            <div className='header'>
                <div id='container_banner'>
                    <div id='tile_background'>
                        <canvas></canvas>
                        <canvas></canvas>
                        <canvas></canvas>
                    </div>
                </div>
                <header>
                    <h1 className='animated fadeIn delay-2'><FormattedMessage id='pro_exchange_landing_page_label_big_title' /></h1>
                    <div className='headButton animated fadeIn delay-3'>
                        <a target='_parent' className='split-btn-withoutba split-btn2' onClick={this.handleClick.bind(this, 'account')}>
                            <div className='beforeElm'>
                                <FormattedMessage id='pro_exchange_landing_page_button_check_account' />
                                <span className='font s-enter' aria-hidden='true' ></span>
                            </div>
                            <span>
                                <FormattedMessage id='pro_exchange_landing_page_button_check_account' />
                                <span className='font s-enter' aria-hidden='true' ></span>
                            </span>
                            <div className='afterElm ng-binding'>
                                <FormattedMessage id='pro_exchange_landing_page_button_check_account' />
                                <span className='font s-enter' aria-hidden='true' ></span>
                            </div>
                            <span />
                        </a>
                        <a className='split-btn-withoutba split-btn3' target='_blank' onClick={this.handleClick.bind(this, 'trade')}>
                            <div className='beforeElm'>
                                <FormattedMessage id='pro_exchange_landing_page_button_trade' />
                                <span className='font s-enter' aria-hidden='true' ></span>
                            </div>
                            <span>
                                <FormattedMessage id='pro_exchange_landing_page_button_trade' />
                                <span className='font s-enter' aria-hidden='true'></span>
                            </span>
                            <div className='afterElm'>
                                <FormattedMessage id='pro_exchange_landing_page_button_trade' />
                                <span className='font s-enter' aria-hidden='true'></span>
                            </div>
                        </a>
                    </div>
                    <div className='animated fadeIn delay-3 row proapp'>
                      <div>
                        <h2>
                          <FormattedMessage id='pro_exchange_landing_page_label_scan_qrcode1' /><br/>
                          <FormattedMessage id='pro_exchange_landing_page_label_scan_qrcode2' />
                        </h2>
                        <img className='qrcode' src={qrcode} alt='Pro Exchange download' />
                        <p><FormattedMessage id='pro_exchange_landing_page_label_for_ios_android' />
                        </p>
                      </div>
                      <div>
                        <img className='phone' src={phone} alt='Pro Exchange App' />
                      </div>
                  </div>
                </header>
            </div>
        );
    }
};

function mapStateToProps(state: IaLLMapState) {
   return {
       lang: state.locales.get('lang'),
       account: state.account,
       terms: state.terms,
   };
 }

 function mapDispatchToProps(dispatch: any) {
   return {
      actions: bindActionCreators(Object.assign({}, PlaceOrderResponseActions, RequestActions, TosActions), dispatch),
   };
 }

 export default connect(
     mapStateToProps,
     mapDispatchToProps,
 )(Header);
