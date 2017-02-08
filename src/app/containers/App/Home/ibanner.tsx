import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './ibanner.less';
import { IbannerProps, IbannerState } from '../../../constants/AppType';

const easyToUsePng = require('../../../resources/images/easy_to_use_final.png');
const secureTransPng = require('../../../resources/images/secure&transparent_final.png');
const industryPng = require('../../../resources/images/Best_Industry_Rates_final.png');
const easyToUseGif = require('../../../resources/images/easy_to_use_final.gif');
const secureTransGif = require('../../../resources/images/secure&transparent_final.gif');
const industryGif = require('../../../resources/images/Best_Industry_Rates_final.gif');
class Banner extends React.Component<IbannerProps, IbannerState> {
    constructor(props: IbannerProps) {
        super(props);
        this.state = {
            easyImg: easyToUsePng,
            secureImg: secureTransPng,
            industryImg: industryPng,
        };
    }
    handleEnter = (item: string) => {
        if (item === 'easy') {
            this.setState({easyImg: easyToUseGif, secureImg: secureTransPng, industryImg: industryPng});
        } else if (item === 'secure') {
            this.setState({easyImg: easyToUsePng, secureImg: secureTransGif, industryImg: industryPng});
        } else if (item === 'induxtry') {
            this.setState({easyImg: easyToUsePng, secureImg: secureTransPng, industryImg: industryGif});
        }
    }
    handleLeave = () => {
        this.setState({easyImg: easyToUsePng, secureImg: secureTransPng, industryImg: industryPng});
    }
    render() {
        return (
            <section className='content_banner'>
                <div className='grid-4'>
                    <img onMouseEnter={this.handleEnter.bind(this,'easy')} onMouseLeave={this.handleLeave} src={ this.state.easyImg }/>
                    <h3><FormattedMessage id='pro_exchange_landing_page_label_easy_to_use' /></h3>
                    <p className='text2 first'><FormattedMessage id='pro_exchange_landing_page_text_easy_to_use' /></p>
                </div>
                <div className='grid-4'>
                    <img onMouseEnter={this.handleEnter.bind(this,'secure')} onMouseLeave={this.handleLeave} src={this.state.secureImg}/>
                    <h3><FormattedMessage id='pro_exchange_landing_page_label_secure_transparent' /></h3>
                    <p className='text2 second'><FormattedMessage id='pro_exchange_landing_page_text_secure_transparent' /></p>
                </div>
                <div className='grid-4'>
                    <img onMouseEnter={this.handleEnter.bind(this,'induxtry')} onMouseLeave={this.handleLeave} src={this.state.industryImg}/>
                    <h3><FormattedMessage id='pro_exchange_landing_page_label_industry_best_rates' /></h3>
                    <p className='text2 third'><FormattedMessage id='pro_exchange_landing_page_text_industry_best_rates' /></p>
                </div>
            </section>
        );
    }
};

export default Banner;
