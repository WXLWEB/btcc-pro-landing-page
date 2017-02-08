import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { IfeedbackProps, IfeedbackState, IaLLMapState } from '../../../constants/AppType';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlaceOrderResponseActions from '../../../actions/placeOrderResponse';
import './style.less';

class FeedbackForm extends React.Component<IfeedbackProps, IfeedbackState> {
  constructor (props: any, context: any) {
    super(props, context);
  };

  componentWillReceiveProps(nextProps: IfeedbackProps) {
    const { actions } = this.props;
    if (nextProps.response.get('tipFailed') || nextProps.response.get('tipSuccess')) {
      const timeout = setTimeout(function(){
        actions.resetFeedbackTips();
        const timeout2 = setTimeout(function() {
          actions.resetFeedbackBack();
          clearTimeout(timeout2);
        }, 300);
        clearTimeout(timeout);
      }, 1000);
    }
  }

  render() {
    return (
      <div className='feedback-content'>
        <div className={`feedback ${this.props.response.get('tipFailed') ? 'tip-failed' : ''} ${this.props.response.get('tipSuccess') ? 'tip-success' : ''}`} >
          <div className={`back ${this.props.response.get('backFailed') ? 'backFailed' : ''} ${this.props.response.get('backSuccess') ? 'backSuccess' : ''}`}>
            {(this.props.response.get('failed').get('insufficient')) && <span><FormattedMessage id='pro_exchange_instant_feedback_insufficient_balance'/></span>}
            {(this.props.response.get('failed').get('incorrectQuantity')) && <span><FormattedMessage id='pro_exchange_instant_feedback_max_quantity_error'/></span>}
            {(this.props.response.get('failed').get('otherError')) && <span><FormattedMessage id='pro_exchange_instant_buy_sell_failed'/></span>}
            {(this.props.response.get('backSuccess')) && <span><FormattedMessage id='pro_exchange_instant_buy_sell_success'/></span>}
          </div>
          <div className='front'>
          </div>
        </div>
        <div className={`errorbox ${this.props.response.get('error') ? 'show' : 'hide'}`}>
          { (this.props.response.get('error')) && <span><FormattedMessage id='pro_exchange_instant_feedback_input_error'/></span>}
        </div>
      </div>
    );
  };
}

function mapStateToProps(state: IaLLMapState) {
   return {
      response: state.placeOrderResponse,
   };
 }

function mapDispatchToProps(dispatch: any) {
   return {
      actions: bindActionCreators(Object.assign({}, PlaceOrderResponseActions), dispatch),
   };
 }

 export default connect(
     mapStateToProps,
     mapDispatchToProps,
 )(FeedbackForm);
