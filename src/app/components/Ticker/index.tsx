import * as React from 'react';
import { FormattedNumber, FormattedMessage } from 'react-intl';
import InstantBuySellForm from '..//Form/InstantBuySellForm/index' ;
import { connect } from 'react-redux';
import './style.less';
import { IaLLMapState } from '../../constants/AppType';

class Ticker extends React.Component<any, any>  {
    render() {
        const ticker = this.props.ticker;
        const lastPrice = ticker.get('lastPrice');
        const volume24H = ticker.get('volume24H');
        const prevcls = ticker.get('prevcls');
        const rate = (lastPrice - prevcls) / prevcls * 100 ? (lastPrice - prevcls) / prevcls * 100 : 0;
        const {showTerm} = this.props;
        return (
            <div className='realPrice'>
                <ul>
                    <li><span className='last'><FormattedMessage id='pro_exchange_landing_page_label_last_price' /></span>
                        <span className='usd'><FormattedNumber value={lastPrice} minimumFractionDigits={2} maximumFractionDigits={2} /> USD</span>
                        <span className='rate'><FormattedNumber value={rate} minimumFractionDigits={2} maximumFractionDigits={2} />% <span className={rate > 0 ? 'up' : rate < 0 ? 'down' : ''} /></span>
                    </li>
                    <li>
                        <InstantBuySellForm showTerm={showTerm} />
                    </li>
                    <li style={{visibility: 'hidden'}}>
                        <FormattedMessage id='pro_exchange_landing_page_label_daily_volume' />
                        <span className='usd'><FormattedNumber value={volume24H} minimumFractionDigits={0} maximumFractionDigits={0} /> BTC</span>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: IaLLMapState) {
   return {
       ticker: state.ticker,
   };
 }

 export default connect(
     mapStateToProps,
 )(Ticker);
