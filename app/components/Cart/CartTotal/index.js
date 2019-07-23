/**
 *
 * CartTotal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PaypalButton from '../../PaypalButton/Loadable';

function CartTotal({ productProvider, history }) {
  const { cartSubTotal, cartTax, cartTotal } = productProvider.state;
  const { clearCart } = productProvider;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span>subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span>tax : </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span>total : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PaypalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

CartTotal.propTypes = {
  productProvider: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default CartTotal;
