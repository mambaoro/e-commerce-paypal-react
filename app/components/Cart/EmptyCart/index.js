/**
 *
 * EmptyCart
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row col-10 mx-auto text-center text-title">
        <h1>your cart is currently empty</h1>
      </div>
    </div>
  );
}

EmptyCart.propTypes = {};

export default memo(EmptyCart);
