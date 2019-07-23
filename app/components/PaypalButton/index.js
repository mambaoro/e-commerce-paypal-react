/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/**
 *
 * PaypalButton
 *
 */

import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { config } from './paypal_config';

export default class MyApp extends React.Component {
  render() {
    const onSuccess = () => {
      // Congratulation, it came here means everything's fine!
      this.props.clearCart();
      this.props.history.push('/');
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = () => {
      // User pressed "cancel" or close Paypal's popup!
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = () => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    const env = 'sandbox'; // you can set here to 'production' for production
    const currency = 'USD'; // or you can set this value from your props or state
    const { total } = this.props; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
    const client = {
      sandbox:
        process.env.REACT_APP_PAYPAL_CLIENT_ID || config.PAYPAL_CLIENT_ID,
      production: 'YOUR-PRODUCTION-APP-ID',
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
