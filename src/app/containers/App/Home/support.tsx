import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './support.less';
import { BASE_URL, HOME_URL } from '../../../utils/urls';
const arrowImg = require('../../../resources/images/pro_landing_icon_bluearrow.png') as string;

class Support extends React.Component<any, any> {
    render() {
        return (
            <section className='content_support'>
                <h3><FormattedMessage id='pro_exchange_landing_page_title_support' /></h3>
                <ul>
                    <li><img src={arrowImg}/><a href={`${BASE_URL}/account/support/faq`}><FormattedMessage id='pro_exchange_landing_page_button_footer_FAQ' /></a></li>
                    <li><img src={arrowImg}/><a href={`${BASE_URL}/account/support/fees`}><FormattedMessage id='pro_exchange_landing_page_button_footer_fees' /></a></li>
                    <li><img src={arrowImg}/><a href={`${BASE_URL}/account/support/tos`}><FormattedMessage id='pro_exchange_landing_page_button_footer_TOS' /></a></li>
                    <li><img src={arrowImg}/><a href={`${HOME_URL}/apidocs/usd-spot-exchange-websocket-api`}><FormattedMessage id='pro_exchange_landing_page_button_footer_websocket_API' /></a></li>
                    <li><img src={arrowImg}/><a href={`${HOME_URL}/apidocs/usd-spot-exchange-fix-trading-api`}><FormattedMessage id='pro_exchange_landing_page_button_footer_trade_API' /></a></li>
                    <li><img src={arrowImg}/><a href={`${HOME_URL}/apidocs/usd-spot-exchange-market-fix-api`}><FormattedMessage id='pro_exchange_landing_page_button_footer_market_API' /></a></li>
                </ul>
            </section>
        );
    }
};

export default Support;
