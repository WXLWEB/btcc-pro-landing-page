import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './liquidity.less';
import { IliquidityProps, IliquidityState } from '../../../constants/AppType';
const arrowImg = require('../../../resources/images/pro_landing_icon_grayarrow.png');
const liquidityImg = require('../../../resources/images/spotusd_landingpage_450.png');
class Liquidity extends React.Component<IliquidityProps, IliquidityState> {
    render() {
        return (
            <section className='content_liquidity'>
                <h3><FormattedMessage id='pro_exchange_landing_page_title_liquidity' /></h3>
                <div className='content_inner'>
                    <img src={ liquidityImg } />
                    <ul>
                        <div className='item'><img src={ arrowImg } /><li><FormattedMessage id='pro_exchange_landing_page_text_deep_liquidity_1' /></li></div>
                        <div className='item'><img src={ arrowImg } /><li><FormattedMessage id='pro_exchange_landing_page_text_deep_liquidity_2' /></li></div>
                    </ul>
                </div>
            </section>
        );
    }
};

export default Liquidity;
