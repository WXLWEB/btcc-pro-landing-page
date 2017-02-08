import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { BASE_URL } from '../../../utils/urls';
import { IaffiliateProps, IaffiliateState, IaLLMapState } from '../../../constants/AppType';

const affiliateEnImg = require('../../../resources/images/leaf_landingpage_image_5.png');
const affiliateZhImg = require('../../../resources/images/leaf_landingpage_image_6.png');

import './affiliate.less';
class Affiliate extends React.Component<IaffiliateProps, IaffiliateState> {
    render() {
        return (
            <section className='content_technology'>
                <h3><FormattedMessage id='pro_exchange_landing_page_title_affiliate' /></h3>
                <p><FormattedMessage id='pro_exchange_landing_page_text_affiliate' /></p>
                <h5><a href={`${BASE_URL}/account/support/faq`}><FormattedMessage id='pro_exchange_landing_page_button_affiliate_program_how' /></a></h5>
                <img src={ this.props.lang === 'zh' ? affiliateZhImg : affiliateEnImg } />
            </section>
        );
    }
};

function mapStateToProps(state: IaLLMapState) {
  return {
    lang: state.locales.get('lang'),
  };
}

export default connect(
  mapStateToProps,
)(Affiliate);
