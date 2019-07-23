/**
 *
 * Cart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Subscribe } from 'unstated';
import Title from '../Title/Loadable';
import CartColumns from './CartColumns/Loadable';
import CartList from './CartList/Loadable';
import EmptyCart from './EmptyCart/Loadable';
import CartTotal from './CartTotal/Loadable';
import ProductProvider from '../ProductList/ProductProvider';

function Cart({ history }) {
  return (
    <Subscribe to={[ProductProvider]}>
      {product => {
        const isEmpty = product.state.cart.length === 0;
        return (
          <section className="py-5">
            {(!isEmpty && (
              <div>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList productProvider={product} />
                <CartTotal productProvider={product} history={history} />
              </div>
            )) ||
              null}
            {(isEmpty && <EmptyCart />) || null}
          </section>
        );
      }}
    </Subscribe>
  );
}

Cart.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Cart;
