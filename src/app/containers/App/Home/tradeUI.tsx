import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './tradeUI.less';
import { ItradeUIProps, ItradeUIState } from '../../../constants/AppType';
const arrowImg = require('../../../resources/images/pro_landing_icon_grayarrow.png');
const tradeUIImg = require('../../../resources/images/leaf_landingpage_image_4.png');
class Liquidity extends React.Component<ItradeUIProps, ItradeUIState> {
    render() {
        return (
            <section className='content_trade'>
                <h3><FormattedMessage id='pro_exchange_landing_page_label_for_pros' /></h3>
                <div className='content_inner'>
                    <div className='des'>
                        <p><FormattedMessage id='pro_exchange_landing_page_text_for_pros' /></p>
                        <ul>
                            <div className='item'><img src={arrowImg} /><li><FormattedMessage id='pro_exchange_landing_page_text_for_pros_1' /></li></div>
                            <div className='item'><img src={arrowImg} /><li><FormattedMessage id='pro_exchange_landing_page_text_for_pros_2' /></li></div>
                            <div className='item'><img src={arrowImg} /><li><FormattedMessage id='pro_exchange_landing_page_text_for_pros_3' /></li></div>
                        </ul>
                    </div>
                    <img src={tradeUIImg} />
                </div>
            </section>
        );
    }
};

export default Liquidity;
