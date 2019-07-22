/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

/**
 *
 * CartItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CartItem({ item, productProvider }) {
  const { id, title, img, price, total, count } = item;
  const { incrementQuantity, decrementQuantity, removeItem } = productProvider;
  return (
    <div className="container-fluid">
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: '5rem', height: '5rem' }}
            alt="product"
            className="img-fluid"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product: </span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price: </span>
          {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrementQuantity(id)}
                role="button"
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => incrementQuantity(id)}
                role="button"
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div
            className="cart-icon"
            onClick={() => removeItem(id)}
            role="button"
          >
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: $ </strong>
          {total}
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  productProvider: PropTypes.object.isRequired,
};

export default CartItem;
