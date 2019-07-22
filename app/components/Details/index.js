/**
 *
 * Details
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Subscribe } from 'unstated';
import Button from '../Button';
import ProductProvider from '../ProductList/ProductProvider';

function Details() {
  return (
    <Subscribe to={[ProductProvider]}>
      {product => {
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart,
        } = product.state.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>model: {title}</h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="text-muted lead">{info}</p>
                <div className="">
                  <Link to="/">
                    <Button>back to product</Button>
                  </Link>
                  <Button
                    disabled={inCart}
                    onClick={() => {
                      product.addToCart(id);
                      product.openModal(id);
                    }}
                    cart
                  >
                    {(inCart && 'in Cart') || 'add to cart'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Subscribe>
  );
}

Details.propTypes = {};

export default memo(Details);
