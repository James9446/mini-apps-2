import React from 'react';
import {render} from 'react-dom';
import $ from "jquery";
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import UserInfo from './components/UserInfo';
import ShippingInfo from './components/ShippingInfo';
import CreditInfo from './components/CreditInfo';
import Confirmation from './components/Confirmation';
import style from './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 0,
      userInfo: {},
      shippingInfo: {},
      creditInfo: {}
    };
  }

  getUserInfo(info) {
    this.setState({
      userInfo: info
    });
    this.nextPage();
  }

  getShippingInfo(info) {
    this.setState({
      shippingInfo: info
    });
    this.nextPage();
  }

  getCreditInfo(info) {
    this.setState({
      creditInfo: info
    });
    this.nextPage();
  }
  
  confirmPurchase() {
    let purchase = {}
    purchase.userInfo = this.state.userInfo;
    purchase.creditInfo = this.state.creditInfo;
    purchase.shippingInfo = this.state.shippingInfo;
    this.addPurchase(purchase);
    this.resetPage();
  }

  nextPage() {
    let count = this.state.pageCount;
    count++;
    this.setState({
      pageCount: count
    });
  }

  prevPage() {
    let count = this.state.pageCount;
    count--;
    this.setState({
      pageCount: count
    });
  }

  resetPage() {
    this.setState({
      pageCount: 0
    });
  } 

  addPurchase(purchase) {
    $.ajax({
      type: "POST",
      url: '/purchase',
      data: JSON.stringify(purchase),
      contentType: 'application/json',
      success: (success) => {
        console.log('successful POST sent to server');
      },
      error: (error) => {
        console.error('There was an error with the POST request', error);
      }
    });
  }

  render () {
    if (this.state.pageCount === 0) {
      return (
        <div>
          <h1>Welcome to the simplest store one the inter web!</h1>
          <button onClick={this.nextPage.bind(this)}>Check Out</button>
        </div>
      )
    } else if (this.state.pageCount === 1) {
      return (
        <div>
          <UserInfo getUserInfo={this.getUserInfo.bind(this)} back={this.prevPage.bind(this)} />
        </div>
      )
    } else if (this.state.pageCount === 2) {
      return (
        <div>
          <ShippingInfo getShippingInfo={this.getShippingInfo.bind(this)} back={this.prevPage.bind(this)} />
        </div>
      )
    } else if (this.state.pageCount === 3) {
      return (
        <div>
          <CreditInfo getCreditInfo={this.getCreditInfo.bind(this)} back={this.prevPage.bind(this)} />
        </div>
      )
    } else if (this.state.pageCount === 4) {
      return (
        <div>
          <Confirmation info={this.state} confirmPurchase={this.confirmPurchase.bind(this)} back={this.prevPage.bind(this)} />
        </div>
      )
    }
  }
}

render(<App/>, document.getElementById('app'));