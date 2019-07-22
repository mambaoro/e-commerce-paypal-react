/**
 *
 * CartList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import v4 from 'uuid/v4';
import CartItem from './CartItem/Loadable';

function CartList({ productProvider }) {
  const cartList = productProvider.state.cart;
  return (
    <div>
      {cartList.map(item => (
        <CartItem key={v4()} item={item} productProvider={productProvider} />
      ))}
    </div>
  );
}

CartList.propTypes = {
  productProvider: PropTypes.object.isRequired,
};

export default CartList;
