import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './introduce.less';
import { IintroduceProps, IintroduceState } from '../../../constants/AppType';

const img01 = require('../../../resources/images/leaf_landingpage_image_1.png');
const img02 = require('../../../resources/images/leaf_landingpage_image_2.png');
const img03 = require('../../../resources/images/leaf_landingpage_image_3.png');
const arrowImg = require('../../../resources/images/pro_landing_icon_grayarrow.png');
class Introduce extends React.Component<IintroduceProps, IintroduceState> {
    render() {
        return (
            <section className='content_introduce'>
                <ul>
                    <li id='gateway'>
                        <div className='inner'>
                            <img src={img01} />
                            <div className='inner_content'>
                                <h3><span><FormattedMessage id='pro_exchange_landing_page_label_gateway_exchange' /></span></h3>
                                <p><FormattedMessage id='pro_exchange_landing_page_text_gateway_exchange' /></p>
                            </div>
                        </div>
                    </li>
                    <li id='entry'>
                        <div className='inner'>
                            <div className='inner_content'>
                                <h3><span><FormattedMessage id='pro_exchange_landing_page_label_easy_entry' /></span></h3>
                                <p><FormattedMessage id='pro_exchange_landing_page_text_easy_entry' /></p>
                            </div>
                            <img src={img02} />
                        </div>
                    </li>
                    <li id='funding'>
                        <div className='inner'>
                            <img src={img03} />
                            <div className='inner_content'>
                                <h3><span><FormattedMessage id='pro_exchange_landing_page_label_fast_funding' /></span></h3>
                                <p><FormattedMessage id='pro_exchange_landing_page_text_fast_funding' /></p>
                                <ul>
                                    <div className='item'><img src={arrowImg} /><li><FormattedMessage id='pro_exchange_landing_page_text_fast_funding_1' /></li></div>
                                    <div className='item'><img src={arrowImg} /><li><FormattedMessage id='pro_exchange_landing_page_text_fast_funding_2' /></li></div>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
};

export default Introduce;
