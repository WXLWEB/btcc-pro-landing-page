import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './introduce.less';
import { IintroduceProps, IintroduceState } from '../../../constants/AppType';

const img01 = require('../../../resources/images/pro_landing_pic_01.png');
const img02 = require('../../../resources/images/pro_landing_pic_02.png');
class Introduce extends React.Component<IintroduceProps, IintroduceState> {
    render() {
        return (
            <section className='content_introduce'>
                <ul>
                    <li>
                        <div className='inner'>
                            <div className='inner_content'>
                                <h3><span><FormattedMessage id='pro_exchange_landing_page_label_gateway_exchange' /></span></h3>
                                <p><FormattedMessage id='pro_exchange_landing_page_text_gateway_exchange' /></p>
                            </div>
                            <div>
                              <img src={img01} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='inner'>
                            <div className='inner_content'>
                                <h3><span><FormattedMessage id='pro_exchange_landing_page_label_easy_entry' /></span></h3>
                                <p><FormattedMessage id='pro_exchange_landing_page_text_easy_entry' /></p>
                            </div>
                            <div>
                              <img src={img02} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='inner'>
                            <div className='inner_content'>
                                <h3><span><FormattedMessage id='pro_exchange_landing_page_label_easy_entry' /></span></h3>
                                <p><FormattedMessage id='pro_exchange_landing_page_text_easy_entry' /></p>
                            </div>
                            <div>
                              <img src={img02} />
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
};

export default Introduce;
