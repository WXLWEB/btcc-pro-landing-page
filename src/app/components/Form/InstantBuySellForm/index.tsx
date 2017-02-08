import * as React from 'react';
import { FormattedNumber, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.less';
import { IaLLMapState } from '../../../constants/AppType';

import * as PlaceOrderResponseActions from '../../../actions/placeOrderResponse';
import * as RequestActions from '../../../actions/request';

class InstantBuySellForm extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {
      showError: false,
      quantity: '',
    };
  }

  handleChange = (event: any) : void => {
    const value = event.target.value;
    if (value.length !== 0 && !/^[\d.]+$/.test(value)) {
      return;
    }
    if (value.length !== 0 && value.toString().split('.')[1] && value.toString().split('.')[1].length > 4) {
      return;
    }
    if (value.length !== 0 && value.toString().split('.')[0] && value.toString().split('.')[0].length > 10) {
      return;
    }
    this.setState({quantity: event.target.value });
    this.setState({showError: false });
    this.props.actions.setErrorToFalse();
  }

  resetInput = () => {
    this.setState({quantity: '' });
  }

  checkLogin = () : boolean => {
    if (!this.props.account.get('content').get('id')) {
      if (document.getElementById('sign_in_btn')) {
          document.getElementById('sign_in_btn').click();
      } else {
          window.location.reload();
      }
      return false;
    }
    if (!this.props.terms.get('accept')) {
        this.props.showTerm();
        return false;
    }
    return true;
  }

  checkQuantity = () : boolean => {
    if (this.state.quantity === '' || this.state.quantity > 500) {
      this.props.actions.setErrorToTrue();
      this.setState({showError: true });
      return true;
    }
    return false;
  }

   buyOrder = (event: any) : void => {
    let login = this.checkLogin();
    if (!login) {
      return;
    }
    let checkQuantity = this.checkQuantity();
    if (checkQuantity) {
      return;
    }
    const { actions } = this.props;
    const quantity = Number(this.state.quantity);
    const order = {
      symbol: 'BTCUSD',
      side: '1',
      orderType: '1',
      quantity: quantity,
      price: 0,
      stopPrice: 0,
      TIF: '1',
      exprDate: '0',
      exprTime: '00:00:00',
    };
    actions.placeOrderRequest(order);
    this.resetInput();
  }

  sellOrder = (event: any) : void => {
    const login = this.checkLogin();
    if (!login) {
      return;
    }
    let checkQuantity = this.checkQuantity();
    if (checkQuantity) {
      return;
    }
    const { actions } = this.props;
    const quantity = Number(this.state.quantity);
    const order = {
      symbol: 'BTCUSD',
      side: '2',
      orderType: '1',
      quantity: quantity,
      price: 0,
      stopPrice: 0,
      TIF: '1',
      exprDate: '0',
      exprTime: '00:00:00',
    };
     actions.placeOrderRequest(order);
     this.resetInput();
  };

   render() {
    return (
        <div className='instantbuysell'>
          <div className='grid-4'>
            <button type='button' className='buy' onClick={ this.buyOrder}><FormattedMessage id='pro_exchange_landing_button_buy' /></button>
          </div>
          <div className='grid-4'>
            <div className={`input-group ${this.state.showError ? 'error' : ''}`}>
              <span className='input-group-addon'><FormattedMessage id='pro_exchange_landing_input_quantity' /></span>
              <input type='number' step='0.0001' min='0.0001' placeholder='0.0000' value={ this.state.quantity } onChange={ e => this.handleChange(e)} />
              <span className='input-group-addon'>BTC</span>
            </div>
            <span className='price'> ≈ <FormattedNumber value={this.props.ticker.get('lastPrice') * this.state.quantity} minimumFractionDigits={2} maximumFractionDigits={2} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD</span>
          </div>
          <div className='grid-4'>
            <button type='button' className='sell' onClick={ this.sellOrder}><FormattedMessage id='pro_exchange_landing_button_sell' /></button>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state: IaLLMapState) {
   return {
       account: state.account,
       terms: state.terms,
       ticker: state.ticker,
   };
 }

 function mapDispatchToProps(dispatch: any) {
   return {
      actions: bindActionCreators(Object.assign({}, PlaceOrderResponseActions, RequestActions), dispatch),
   };
 }

 export default connect(
     mapStateToProps,
     mapDispatchToProps,
 )(InstantBuySellForm);
