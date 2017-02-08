import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './download.less';
import { IdownloadProps, IdownloadState } from '../../../constants/AppType';

const LogoImg = require('../../../resources/images/leaf_app_icon_download.png');
const QRcodeImg = require('../../../resources/images/leaf_app_download.png');
const AppImg = require('../../../resources/images/spotusd_landing_page_pic_phone.png');

class Download extends React.Component<IdownloadProps, IdownloadState> {
    render() {
        return (
            <section id='download' >
                <div className='content_download'>
                    <div className='download_inner'>
                        <div className='left'>
                            <img src={LogoImg} />
                        </div>
                        <div className='middle'>
                            <h3>BTCC</h3>
                            <div className='des'>
                                <h4><FormattedMessage id='pro_exchange_landing_page_download_title' /></h4>
                                <span><FormattedMessage id='pro_exchange_landing_page_download_des' /></span>
                            </div>
                            <div className='QRcode'>
                                <img src={QRcodeImg} />
                                <div className='q_des'>
                                    <span><FormattedMessage id='pro_exchange_landing_page_download_qcode' /></span>
                                    <span><FormattedMessage id='pro_exchange_landing_page_download_qcode_des' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={AppImg} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Download;
