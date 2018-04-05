import React from 'react';
import style from './../main.css';

const Confirmation = (props) => (
    <div>
      <h1>Please confirm information is correct</h1>
      <p>Name: {props.info.userInfo.name}</p>
      <p>Email: {props.info.userInfo.email}</p>
      {/* <p>{props.info.userInfo.password}</p> */}
      <p>Address: {props.info.shippingInfo.line1} {props.info.shippingInfo.line2} {props.info.shippingInfo.city} {props.info.shippingInfo.state} {props.info.shippingInfo.zip}</p>
      <p>Phone Number: {props.info.shippingInfo.phone}</p>
      <p>Card: **** **** **** {props.info.creditInfo.card.slice(-4)}</p>
      <p>Expritation: {props.info.creditInfo.exp}</p>
      {/* <p>{props.info.creditInfo.cvv}</p> */}
      <p>Billing zip: {props.info.creditInfo.billing}</p>
      <button onClick={props.back}> Back </button>
      <button onClick={props.confirmPurchase}>Confirmation</button>
    </div>
);

export default Confirmation;