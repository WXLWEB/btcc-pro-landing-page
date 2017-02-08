import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as TosActions from '../../../actions/tos';

import Spinner from '../../../components/Spinner/index';
import './tos.less';
import { BASE_URL } from '../../../utils/urls';
import { ItosProps, ItosState, IaLLMapState } from '../../../constants/AppType';

class Tos extends React.Component<ItosProps, ItosState> {
    constructor(props: ItosProps) {
        super(props);
        this.state = {
            submitting: false,
        };
    }
    handleAccept = () => {
        if (this.state.submitting) {
            return;
        }
        this.setState({ submitting: true });
        this.props.actions.agreeTos();
    }
    componentWillReceiveProps(nextProps: ItosProps) {
        console.log('next', nextProps);
        const terms = nextProps.terms;
        if (terms.get('accept') || terms.get('acceptFailed')) {
            this.setState({ submitting: false });
        }
        if (terms.get('accept') && terms.get('from')) {
            if (terms.get('from') === 'account') {
                window.location.href = `${BASE_URL}/account/overview`;
            } else if (terms.get('from') === 'trade') {
                window.location.href = `${BASE_URL}/trade/btcusd`;
            }
        }
    }
    render() {
        return (
            <div className='content_tos' style={{ display: this.props.accept ? 'block' : 'none' }}>
                <div className='main_content'>
                    <header><h4><FormattedMessage id='pro_exchange_landing_page_tos_header' /></h4><a onClick={this.props.closeTerm} /></header>
                    <div className='staticContent terms' dangerouslySetInnerHTML={{ __html: this.props.tos.get('content') }}></div>
                    <div className='accept'>
                        <button className='b-h-blue' onClick={this.handleAccept}><FormattedMessage id='pro_exchange_landing_page_tos_accept' />{this.state.submitting && <Spinner />}</button>
                        {(this.props.terms.get('acceptFailed')) && <div className='error'><FormattedMessage id='pro_exchange_landing_page_tos_failed' /></div>}
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state: IaLLMapState) {
    return {
        tos: state.tos,
        terms: state.terms,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(Object.assign({}, TosActions), dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tos);
