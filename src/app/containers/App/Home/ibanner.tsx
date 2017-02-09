import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import './ibanner.less';
import { IbannerProps, IbannerState } from '../../../constants/AppType';

const SpeedyTransactionsPng = require('../../../resources/images/Speedy-Transactions.png');
const StopOrderPng = require('../../../resources/images/stop_orders.png');
const TransparencyPng = require('../../../resources/images/transparency.png');
const SpeedyTransactionsGif = require('../../../resources/images/Speedy-Transactions.gif');
const StopOrderGif = require('../../../resources/images/stop_orders.gif');
const TransparencyGif = require('../../../resources/images/transparency.gif');
class Banner extends React.Component<IbannerProps, IbannerState> {
    constructor(props: IbannerProps) {
        super(props);
        this.state = {
            easyImg: SpeedyTransactionsPng,
            secureImg: StopOrderPng,
            TransparencyImg: TransparencyPng,
        };
    }
    handleEnter = (item: string) => {
        if (item === 'easy') {
            this.setState({easyImg: SpeedyTransactionsGif, secureImg: StopOrderPng, TransparencyImg: TransparencyPng});
        } else if (item === 'secure') {
            this.setState({easyImg: SpeedyTransactionsPng, secureImg: StopOrderGif, TransparencyImg: TransparencyPng});
        } else if (item === 'induxtry') {
            this.setState({easyImg: SpeedyTransactionsPng, secureImg: StopOrderPng, TransparencyImg: TransparencyGif});
        }
    }
    handleLeave = () => {
        this.setState({easyImg: SpeedyTransactionsPng, secureImg: StopOrderPng, TransparencyImg: TransparencyPng});
    }
    render() {
        return (
          <div className='banner'>
            <h3 className='title'><FormattedHTMLMessage id='pro_exchange_landing_page_label_why_choose_pro_exchange' /></h3>
            <p><FormattedMessage id='pro_exchange_landing_page_text_why_choose_pro_exchange' /></p>
            <section className='content_banner'>
                <div className='grid-4'>
                    <img onMouseEnter={this.handleEnter.bind(this,'easy')} onMouseLeave={this.handleLeave} src={ this.state.easyImg }/>
                    <h3><FormattedMessage id='pro_exchange_landing_page_label_speedy_transactions' /></h3>
                    <p className='text2 first'><FormattedMessage id='pro_exchange_landing_page_text_speedy_transactions' /></p>
                </div>
                <div className='grid-4'>
                    <img onMouseEnter={this.handleEnter.bind(this,'secure')} onMouseLeave={this.handleLeave} src={this.state.secureImg}/>
                    <h3><FormattedMessage id='pro_exchange_landing_page_label_stop_order' /></h3>
                    <p className='text2 second'><FormattedMessage id='pro_exchange_landing_page_text_stop_order' /></p>
                </div>
                <div className='grid-4'>
                    <img onMouseEnter={this.handleEnter.bind(this,'induxtry')} onMouseLeave={this.handleLeave} src={this.state.TransparencyImg}/>
                    <h3><FormattedMessage id='pro_exchange_landing_page_label_secure_transparent' /></h3>
                    <p className='text2 third'><FormattedMessage id='pro_exchange_landing_page_text_secure_transparent' /></p>
                </div>
            </section>
          </div>
        );
    }
};

export default Banner;
