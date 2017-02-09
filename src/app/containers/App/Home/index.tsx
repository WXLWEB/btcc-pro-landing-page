import * as React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Banner from './ibanner';
import Support from './support';
import Tos from './tos';
import AppLink from './appLink';
import Introduce from './introduce';

import './index.less';
import { IcontentProps, IcontentState, IaLLMapState } from '../../../constants/AppType';

let time = null;
let times = 0;

class Home extends React.Component<IcontentProps, IcontentState> {
    constructor(props: IcontentProps) {
        super(props);
        this.state = {
            showTermOfService: false,
        };
    }
    closeTerm = () => {
        if (time) {
            clearInterval(time);
        }
        this.setState({showTermOfService: false});
    }
    showTerm = () => {
        this.setState({showTermOfService: true});
    }
    showTermInit = () => {
        times++;
        if (this.props.account.get('content').get('id') && !this.state.showTermOfService && times <= 10) {
            this.setState({showTermOfService: true});
        }
        if (time) {
            clearInterval(time);
        }
        if (times < 10) {
            time = setInterval(this.showTermInit, 1000);
        }
    }
    componentDidMount() {
        this.showTermInit();
    }
    render() {
        const accept = !this.props.terms.get('accept') && this.props.account.get('content').get('id') && this.state.showTermOfService;
        return (
            <div className='content'>
                <Tos closeTerm={this.closeTerm} accept={accept}/>
                <Header showTerm={this.showTerm} />
                <div id='reactGeneralActivity'></div>
                <Banner />
                <Introduce />
                <Support />
                <AppLink />
            </div>
        );
    }
};

function mapStateToProps(state: IaLLMapState) {
  return {
    lang: state.locales.get('lang'),
    account: state.account,
    terms: state.terms,
  };
}

export default connect(
  mapStateToProps,
)(Home);
