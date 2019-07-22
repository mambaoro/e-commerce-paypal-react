/**
 *
 * CartColumns
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block mt-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}

CartColumns.propTypes = {};

export default memo(CartColumns);
