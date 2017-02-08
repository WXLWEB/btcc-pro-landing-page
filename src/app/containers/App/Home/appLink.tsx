import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { IappLinkProps, IappLinkState } from '../../../constants/AppType';
const closeImg = require('../../../resources/images/Close.png');
const appLogo = require('../../../resources/images/JustPay App_final_web_download.png');

import './appLink.less';
class AppLink extends React.Component<IappLinkProps, IappLinkState> {
    constructor(props: any) {
        super(props);
        let platform = String(navigator.userAgent.toLowerCase());
        this.state = {
            showApp: /(Android)/i.test(platform) || /(iPhone|iPad|iPod|iOS)/i.test(platform),
        };
    }
    close = () => {
        this.setState({showApp: false});
    }

    render() {
        return (
            <section className='content_app_link' style={{ display: this.state.showApp ? 'block' : 'none' }}>
                <div className='app_link_innder'>
                    <div className='close' onClick={this.close}><img src={closeImg} /></div>
                    <div className='logo'>
                        <img src={appLogo} />
                    </div>
                    <div className='title'>
                        <h3>BTCC</h3>
                    </div>
                    <div className='block'></div>
                    <div className='button'>
                        <a href='https://exchange.btcc.com/appdownload'>
                            <FormattedMessage id='pro_exchange_landing_page_download_app_link'/>
                    </a>
                    </div>
                </div>

            </section>
        );
    }
};

export default AppLink;
