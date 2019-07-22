/**
 *
 * ProductList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Subscribe } from 'unstated';
import v4 from 'uuid/v4';
import Container from './ProductProvider';
import Title from '../Title/Loadable';
import Product from './Product/Loadable';

function ProductList() {
  return (
    <React.Fragment>
      <Subscribe to={[Container]}>
        {product => (
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                {product.state.products.map(productInfos => (
                  <Product key={v4()} productInfos={productInfos} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Subscribe>
    </React.Fragment>
  );
  // Product />;
}

ProductList.propTypes = {};

export default memo(ProductList);
